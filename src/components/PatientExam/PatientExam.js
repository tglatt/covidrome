import Router from "next/router";
import { Form, Formik } from "formik";
import { Box, Button, Flex } from "rebass";
import { createPatientExam } from "../../lib/endpoints";
import { patientExamSchema } from "../../lib/validationSchemas";
import { CheckBoxField, Field, Textarea } from "../../ui";

const emptyValues = {
  examDate: "",
  physician: "",
  nurse: "",
  toux: false,
  expectorations: "",
  temperature: "",
  poids: "",
  syndromeGrippal: false,
  signesORIHauts: false,
  anosmie: false,
  agueusie: false,
  dyspnee: false,
  conjonctivite: false,
  deshydratation: false,
  diarrhee: false,
  etatConscience: "",
  frequenceRespi: "",
  SPO2Saturometre: "",
  SPO2ROTH: "",
  PA: "",
  pouls: "",
  marbrures: false,
  autre: "",
};

const PatientExam = ({ patient, medecins, IDEs }) => {
  return (
    <Formik
      enableReinitialize
      // TODO: allow editing an exam from a list of exams
      initialValues={{
        ...emptyValues,
        ...(patient.exams ? patient.exams[0] : {}),
      }}
      validationSchema={patientExamSchema(medecins || [], IDEs || [])}
      onSubmit={(values, { setSubmitting, setStatus }) => {
        createPatientExam(patient, values);
        setSubmitting(false);

        Router.push("/");
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field name="examDate" label="Date du bilan" type="date" />
          <Field name="physician" label="médecin" />
          <Field name="nurse" label="IDE" />
          <CheckBoxField name="toux" label="toux" />
          <Field name="expectorations" label="expectorations (aspect)" />
          <Field name="temperature" label="température" />
          <Field name="poids" label="poids" />
          <CheckBoxField name="syndromeGrippal" label="syndrôme grippal" />
          <CheckBoxField name="signesORIHauts" label="signes ORI hauts" />
          <CheckBoxField name="anosmie" label="anosmie" />
          <CheckBoxField name="agueusie" label="agueusie" />
          <CheckBoxField name="dyspnee" label="dyspnee" />
          <CheckBoxField name="conjonctivite" label="conjonctivite" />
          <CheckBoxField name="deshydratation" label="déshydrataion" />
          <CheckBoxField name="diarrhee" label="diarrhée" />
          <Field name="etatConscience" label="état de conscience" />
          <Field name="frequenceRespi" label="fréquence respi X/mn" />
          <Field name="SPO2Saturometre" label="SPO2 Saturomètre" />
          <Field name="SPO2ROTH" label="SPO2 ROTH" />
          <Field name="PA" label="PA" />
          <Field name="pouls" label="pouls" />
          <CheckBoxField name="marbrures" label="marbrures" />
          <Textarea name="autre" label="autre" />

          <Flex alignItems="center" justifyContent="flex-end">
            <Box>
              <Button type="submit" disabled={isSubmitting}>
                Enregistrer
              </Button>
            </Box>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export { PatientExam };
