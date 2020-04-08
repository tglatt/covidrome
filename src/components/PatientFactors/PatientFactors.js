import Router from "next/router";
import { Form, Formik } from "formik";
import { Box, Button, Flex } from "rebass";
import { createPatientFactors } from "../../lib/endpoints";
import { patientFactorsSchema } from "../../lib/validationSchemas";
import { Card } from "../../ui/Card";
import { CheckBoxField, Heading3, twoColumnStyle } from "../../ui";

const PatientFactors = ({ patient }) => {
  return (
    <Formik
      enableReinitialize
      initialValues={patient.factors || {}}
      validationSchema={patientFactorsSchema}
      onSubmit={(values, { setSubmitting, setStatus }) => {
        createPatientFactors(patient, values);
        setSubmitting(false);

        Router.push("/");
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Flex>
            <Card sx={twoColumnStyle}>
              <Heading3>Facteurs de risques médicaux</Heading3>
              <Box p={1}>
                <CheckBoxField name="FRMHTA" label="HTA" />
                <CheckBoxField name="FRMSup70" label="âge > 70 ans" />
                <CheckBoxField name="FRMIMCSup40" label="IMC > 40" />
                <CheckBoxField name="FRMEnceinte" label="femme enceinte" />
                <CheckBoxField
                  name="FRMPathologieCardiaque"
                  label="pathologie cardiaque"
                />
                <CheckBoxField
                  name="FRMPathologieDiabete"
                  label="diabète insulino dépendant ou compliqué"
                />
                <CheckBoxField
                  name="FRMPathologieRepiratoireChronique"
                  label="pathologie respiratoire chronique"
                />
                <CheckBoxField
                  name="FRMCancerSousTraitement"
                  label="cancer sous traitement"
                />
                <CheckBoxField
                  name="FRMInsRenaleDialysee"
                  label="insuffisance rénale dialysée"
                />
                <CheckBoxField
                  name="FRMImmunodepression"
                  label="immunodépression (médicament, VIH)"
                />
                <CheckBoxField
                  name="FRMCirrhoseB"
                  label="cirrhose >= stade B"
                />
                <CheckBoxField name="FRMThrombose" label="thrombose" />
                <CheckBoxField
                  name="FRMProcheFragile"
                  label="Présence d'un proche fragile au domicile"
                />
              </Box>
            </Card>
            <Card sx={twoColumnStyle}>
              <Heading3>Facteurs sociaux-environementaux</Heading3>
              <Box p={1}>
                <CheckBoxField name="FRSEIsolement" label="isolement" />
                <CheckBoxField
                  name="FRSEPrecariteSociEco"
                  label="précarité socio-économique"
                />
                <CheckBoxField
                  name="FRSEDifficulteLinguistique"
                  label="difficulté linguistique"
                />
                <CheckBoxField
                  name="FRSETroublesNeuroPsy"
                  label="troubles neuro/psy"
                />
                <CheckBoxField
                  name="FRSEPasMoyenCommunication"
                  label="pas de moyen de communication"
                />
                <CheckBoxField
                  name="FRSEPieceConfinement"
                  label="Pièce de confinement disponible"
                />
              </Box>
            </Card>
          </Flex>
          <Flex alignItems="center" justifyContent="flex-end">
            <Box>
              <Button type="submit">Enregistrer</Button>
            </Box>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export { PatientFactors };
