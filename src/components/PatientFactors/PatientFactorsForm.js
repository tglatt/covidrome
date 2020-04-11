import { Form, Formik } from "formik";
import { Box, Flex } from "rebass";
import { patientFactorsSchema } from "../../lib/validationSchemas";
import {
  Card,
  CheckBoxField,
  FormSubmit,
  Heading3,
  Textarea,
  twoColumnStyle,
} from "../../ui";
import { asBoolean } from "../../../src/lib/boolean";

const initialValues = (riskFactor) => ({
  FRMHTA: asBoolean(riskFactor.FRMHTA),
  FRMSup70: asBoolean(riskFactor.FRMSup70),
  FRMImcSup40: asBoolean(riskFactor.FRMImcSup40),
  FRMEnceinte: asBoolean(riskFactor.FRMEnceinte),
  FRMPathologieCardiaque: asBoolean(riskFactor.FRMPathologieCardiaque),
  FRMPathologieDiabete: asBoolean(riskFactor.FRMPathologieDiabete),
  FRMPathologieRespiratoireChronique: asBoolean(
    riskFactor.FRMPathologieRespiratoireChronique
  ),
  FRMCancerSousTraitement: asBoolean(riskFactor.FRMCancerSousTraitement),
  FRMInsRenaleDialysee: asBoolean(riskFactor.FRMInsRenaleDialysee),
  FRMImmunoDepression: asBoolean(riskFactor.FRMImmunoDepression),
  FRMCirrhoseB: asBoolean(riskFactor.FRMCirrhoseB),
  FRMThrombose: asBoolean(riskFactor.FRMThrombose),
  FRMAutre: riskFactor.FRMAutre || "",
  FRMProcheFragile: asBoolean(riskFactor.FRMProcheFragile),
  FRSEIsolement: asBoolean(riskFactor.FRSEIsolement),
  FRSEPrecariteSociEco: asBoolean(riskFactor.FRSEPrecariteSociEco),
  FRSEDifficulteLinguistique: asBoolean(riskFactor.FRSEDifficulteLinguistique),
  FRSETroublesNeuroPsy: asBoolean(riskFactor.FRSETroublesNeuroPsy),
  FRSEPasMoyenCommunication: asBoolean(riskFactor.FRSEPasMoyenCommunication),
  FRSEAidant: riskFactor.FRSEAidant || "",
  FRSERemarques: riskFactor.FRSERemarques || "",
  FRSEPieceConfinement: asBoolean(riskFactor.FRSEPieceConfinement),
});

const PatientFactorsForm = ({ riskFactor, handleSubmit, handleCancel }) => {
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues(riskFactor || {})}
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
                  <CheckBoxField name="FRMImcSup40" label="IMC > 40" />
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
                    name="FRMPathologieRespiratoireChronique"
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
                    name="FRMImmunoDepression"
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
            <FormSubmit disabled={isSubmitting} handleCancel={handleCancel} />
          </Form>
        </Card>
      )}
    </Formik>
  );
};

export { PatientFactorsForm };
