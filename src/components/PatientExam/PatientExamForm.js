import { Form, Formik } from "formik";
import { Box, Button, Flex } from "rebass";
import {
  etatConscienceChoices,
  expectorationsChoices,
  patientExamSchema,
  SPO2ROTHChoices,
} from "../../lib/validationSchemas";
import { Card } from "../../ui/Card";
import {
  CheckBoxField,
  Field,
  Heading3,
  Select,
  Textarea,
  twoColumnStyle,
} from "../../ui";
import { asBoolean } from "../../../src/lib/boolean";
import { asDateString } from "../../../src/lib/dates";

const initialValues = (exam) => ({
  examDate: (exam.examDate && asDateString(exam.examDate)) || "",
  physician: exam.physician ? exam.physician : "",
  nurse: exam.nurse ? exam.nurse : "",
  toux: asBoolean(exam.toux),
  expectorations: exam.expectorations ? exam.expectorations : "",
  temperature: exam.temperature ? exam.temperature : "",
  poids: exam.poids ? exam.poids : "",
  syndromeGrippal: asBoolean(exam.syndromeGrippal),
  signesORIHauts: asBoolean(exam.signesORIHauts),
  anosmie: asBoolean(exam.anosmie),
  agueusie: asBoolean(exam.agueusie),
  dyspnee: asBoolean(exam.dyspnee),
  conjonctivite: asBoolean(exam.conjonctivite),
  deshydratation: asBoolean(exam.deshydratation),
  diarrhee: asBoolean(exam.diarrhee),
  etatConscience: exam.etatConscience ? exam.etatConscience : "",
  frequenceRespi: exam.frequenceRespi ? exam.frequenceRespi : "",
  SPO2Saturometre: exam.SPO2Saturometre ? exam.SPO2Saturometre : "",
  SPO2ROTH: exam.SPO2ROTH ? exam.SPO2ROTH : "",
  PA: exam.PA ? exam.PA : "",
  pouls: exam.pouls ? exam.pouls : "",
  marbrures: asBoolean(exam.marbrures),
  autre: exam.autre ? exam.autre : "",
});

const PatientExamForm = ({ exam, medecins, IDEs, handleSubmit }) => {
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues(exam) || {}}
      validationSchema={patientExamSchema(medecins || [], IDEs || [])}
      onSubmit={handleSubmit(exam)}
    >
      {({ isSubmitting }) => (
        <Card mb={1}>
          <Form>
            <Heading3 ml={3}>Bilan</Heading3>
            <Flex>
              <Box sx={twoColumnStyle}>
                <Field name="examDate" label="Date du bilan" type="date" />
                <Select name="physician" label="médecin" choices={medecins} />
                <Select name="nurse" label="IDE" choices={IDEs} />
                <CheckBoxField name="toux" label="toux" />
                <Select
                  name="expectorations"
                  label="expectorations (aspect)"
                  choices={expectorationsChoices}
                />
                <Field name="temperature" label="température" />
                <Field name="poids" label="poids" />
                <CheckBoxField
                  name="syndromeGrippal"
                  label="syndrôme grippal"
                />
                <CheckBoxField name="signesORIHauts" label="signes ORI hauts" />
                <CheckBoxField name="anosmie" label="anosmie" />
                <CheckBoxField name="agueusie" label="agueusie" />
                <CheckBoxField name="dyspnee" label="dyspnee" />
                <CheckBoxField name="conjonctivite" label="conjonctivite" />
                <CheckBoxField name="deshydratation" label="déshydrataion" />
                <CheckBoxField name="diarrhee" label="diarrhée" />
              </Box>
              <Box sx={twoColumnStyle}>
                <Select
                  name="etatConscience"
                  label="état de conscience"
                  choices={etatConscienceChoices}
                />
                <Field name="frequenceRespi" label="fréquence respi X/mn" />
                <Field name="SPO2Saturometre" label="SPO2 Saturomètre" />
                <Select
                  name="SPO2ROTH"
                  label="SPO2 ROTH"
                  choices={SPO2ROTHChoices}
                />
                <Field name="PA" label="PA" />
                <Field name="pouls" label="pouls" />
                <CheckBoxField name="marbrures" label="marbrures" />
                <Textarea name="autre" label="autre" />
              </Box>
            </Flex>

            <Flex alignItems="center" justifyContent="flex-end">
              <Box>
                <Button type="submit" disabled={isSubmitting}>
                  Enregistrer
                </Button>
              </Box>
            </Flex>
          </Form>
        </Card>
      )}
    </Formik>
  );
};

export { PatientExamForm };
