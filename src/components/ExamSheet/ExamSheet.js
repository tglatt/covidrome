import { Box, Flex } from "rebass";
import { Checkbox, Label } from "@rebass/forms";
import { Card } from "../../ui/Card";
import { Heading3, twoColumnStyle } from "../../ui";

const CheckBoxField = ({ property, label }) => (
  <Box>
    <Label>
      <Checkbox id={property} name={property} />
      {label}
    </Label>
  </Box>
);

const ExamSheet = props => {
  return (
    <Flex flexDirection="column">
      <Flex>
        <Card sx={twoColumnStyle}>
          <Heading3>Facteurs de risques médicaux</Heading3>
          <Box p={1}>
            <CheckBoxField property="FRMHTA" label="HTA" />
            <CheckBoxField property="FRMSup70" label="âge > 70 ans" />
            <CheckBoxField property="FRMIMCSup40" label="IMC > 40" />
            <CheckBoxField property="FRMEnceinte" label="femme enceinte" />
            <CheckBoxField
              property="FRMPathologieCardiaque"
              label="pathologie cardiaque"
            />
            <CheckBoxField
              property="FRMPathologieDiabete"
              label="diabète insulino dépendant ou compliqué"
            />
            <CheckBoxField
              property="FRMPathologieRepiratoireChronique"
              label="pathologie respiratoire chronique"
            />
            <CheckBoxField
              property="FRMCancerSousTraitement"
              label="cancer sous traitement"
            />
            <CheckBoxField
              property="FRMInsRenaleDialysee"
              label="insuffisance rénale dialysée"
            />
            <CheckBoxField
              property="FRMImmunodépression"
              label="immunodépression (médicament, VIH)"
            />
            <CheckBoxField
              property="FRMCirrhoseB"
              label="cirrhose >= stade B"
            />
          </Box>
        </Card>
        <Card sx={twoColumnStyle}>
          <Heading3>Facteurs sociaux-environementaux</Heading3>
          <Box p={1}>
            <CheckBoxField property="FRSEIsolement" label="isolement" />
            <CheckBoxField
              property="FRSEPrecariteSociEco"
              label="précarité socio-économique"
            />
            <CheckBoxField
              property="FRSEDifficulteLinguistique"
              label="difficulté linguistique"
            />
            <CheckBoxField
              property="FRSEtroublesNeuroPsy"
              label="troubles neuro/psy"
            />
            <CheckBoxField
              property="FRSEPasMoyenCommunication"
              label="pas de moyen de communication"
            />
          </Box>
        </Card>
      </Flex>
    </Flex>
  );
};

export { ExamSheet };
