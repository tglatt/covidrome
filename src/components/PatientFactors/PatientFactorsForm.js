import { Form, Formik } from "formik";
import { Box, Button, Flex } from "rebass";
import { patientFactorsSchema } from "../../lib/validationSchemas";
import { Card } from "../../ui/Card";
import { CheckBoxField, Heading3, Textarea, twoColumnStyle } from "../../ui";

const emptyValues = {
  FRMHTA: false,
  FRMSup70: false,
  FRMIMCSup40: false,
  FRMEnceinte: false,
  FRMPathologieCardiaque: false,
  FRMPathologieDiabete: false,
  FRMPathologieRespiratoireChronique: false,
  FRMCancerSousTraitement: false,
  FRMInsRenaleDialysee: false,
  FRMImmunodepression: false,
  FRMCirrhoseB: false,
  FRMThrombose: false,
  FRMAutre: "",
  FRMProcheFragile: false,
  FRSEIsolement: false,
  FRSEPrecariteSociEco: false,
  FRSEDifficulteLinguistique: false,
  FRSETroublesNeuroPsy: false,
  FRSEPasMoyenCommunication: false,
  FRSEAidant: "",
  FRSERemarques: "",
  FRSEPieceConfinement: false,
};

const PatientFactorsForm = ({ patient, handleSubmit }) => {
  return (
    <Formik
      enableReinitialize
      initialValues={{ ...emptyValues, ...patient.factors }}
      validationSchema={patientFactorsSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Card>
          <Form>
            <Flex>
              <Box sx={twoColumnStyle}>
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
                  <Textarea name="FRMAutre" label="autre" />
                  <CheckBoxField
                    name="FRMProcheFragile"
                    label="Présence d'un proche fragile au domicile"
                  />
                </Box>
              </Box>
              <Box sx={twoColumnStyle}>
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
                  <Textarea name="FRSEAidant" label="Aidant éventuel" />
                  <Textarea name="FRSERemarques" label="Remarques" />
                  <CheckBoxField
                    name="FRSEPieceConfinement"
                    label="Pièce de confinement disponible"
                  />
                </Box>
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

export { PatientFactorsForm };
