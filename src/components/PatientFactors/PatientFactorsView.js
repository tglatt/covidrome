import { Box, Button, Flex } from "rebass";
import { Card, twoColumnStyle, Heading3, FieldLabelValue } from "../../ui";

const labelOf = value => (value ? "oui" : "non");

const PatientFactorsView = ({ riskFactor, handleEdit }) => {
  const factors = riskFactor ? riskFactor : {};
  return (
    <Card>
      <Flex>
        <Box sx={twoColumnStyle}>
          <Box mb={1}>
            <Heading3>Facteurs de risques médicaux</Heading3>
          </Box>
          <FieldLabelValue value={labelOf(factors.FRMHTA)} label="HTA" />
          <FieldLabelValue
            value={labelOf(factors.FRMSup70)}
            label="âge > 70 ans"
          />
          <FieldLabelValue
            value={labelOf(factors.FRMImcSup40)}
            label="IMC > 40"
          />
          <FieldLabelValue
            value={labelOf(factors.FRMEnceinte)}
            label="femme enceinte"
          />
          <FieldLabelValue
            value={labelOf(factors.FRMPathologieCardiaque)}
            label="pathologie cardiaque"
          />
          <FieldLabelValue
            value={labelOf(factors.FRMPathologieDiabete)}
            label="diabète insulino dépendant ou compliqué"
          />
          <FieldLabelValue
            value={labelOf(factors.FRMPathologieRespiratoireChronique)}
            label="pathologie respiratoire chronique"
          />
          <FieldLabelValue
            value={labelOf(factors.FRMCancerSousTraitement)}
            label="cancer sous traitement"
          />
          <FieldLabelValue
            value={labelOf(factors.FRMInsRenaleDialysee)}
            label="insuffisance rénale dialysée"
          />
          <FieldLabelValue
            value={labelOf(factors.FRMImmunoDepression)}
            label="immunodépression (médicament, VIH)"
          />
          <FieldLabelValue
            value={labelOf(factors.FRMCirrhoseB)}
            label="cirrhose >= stade B"
          />
          <FieldLabelValue
            value={labelOf(factors.FRMThrombose)}
            label="thrombose"
          />
          <FieldLabelValue value={factors.FRMAutre} label="autre" />
          <FieldLabelValue
            value={labelOf(factors.FRMProcheFragile)}
            label="Présence d'un proche fragile au domicile"
          />
        </Box>
        <Box sx={twoColumnStyle}>
          <Box mb={1}>
            <Heading3>Facteurs sociaux-environementaux</Heading3>
          </Box>
          <FieldLabelValue
            label="isolement"
            value={labelOf(factors.FRSEIsolement)}
          />
          <FieldLabelValue
            label="précarité socio-économique"
            value={labelOf(factors.FRSEPrecariteSociEco)}
          />
          <FieldLabelValue
            label="difficulté linguistique"
            value={labelOf(factors.FRSEDifficulteLinguistique)}
          />
          <FieldLabelValue
            label="troubles neuro/psy"
            value={labelOf(factors.FRSETroublesNeuroPsy)}
          />
          <FieldLabelValue
            label="pas de moyen de communication"
            value={labelOf(factors.FRSEPasMoyenCommunication)}
          />
          <FieldLabelValue label="Aidant éventuel" value={factors.FRSEAidant} />
          <FieldLabelValue label="Remarques" value={factors.FRSERemarques} />
          <FieldLabelValue
            label="Pièce de confinement disponible"
            value={labelOf(factors.FRSEPieceConfinement)}
          />
        </Box>
      </Flex>
      <Flex alignItems="center" justifyContent="flex-end">
        <Box>
          <Button onClick={handleEdit}>Editer</Button>
        </Box>
      </Flex>
    </Card>
  );
};

export { PatientFactorsView };
