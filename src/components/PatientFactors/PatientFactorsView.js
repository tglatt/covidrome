import { Box, Flex, Link } from "rebass";
import {
  Card,
  CheckBoxView,
  TextareaView,
  Heading3,
  twoColumnStyle,
} from "../../ui";

const EditLink = ({ handleEdit }) => (
  <Box ml={2}>
    <Link
      sx={{
        cursor: "pointer",
        fontSize: "0",
        textDecoration: "underline",
      }}
      onClick={handleEdit}
    >
      éditer
    </Link>
  </Box>
);

const PatientFactorsView = ({ riskFactor, handleEdit }) => {
  const factors = riskFactor ? riskFactor : {};
  return (
    <Card>
      <Flex alignItems="center">
        <Heading3 pl={1}>
          Facteurs de risques médicaux et sociaux-environementaux
        </Heading3>
        <EditLink handleEdit={handleEdit} />
      </Flex>
      <Flex>
        <Box sx={twoColumnStyle}>
          <CheckBoxView value={factors.FRMHTA} label="HTA" />
          <CheckBoxView value={factors.FRMSup70} label="âge > 70 ans" />
          <CheckBoxView value={factors.FRMImcSup40} label="IMC > 40" />
          <CheckBoxView value={factors.FRMEnceinte} label="femme enceinte" />
          <CheckBoxView
            value={factors.FRMPathologieCardiaque}
            label="pathologie cardiaque"
          />
          <CheckBoxView
            value={factors.FRMPathologieDiabete}
            label="diabète insulino dépendant ou compliqué"
          />
          <CheckBoxView
            value={factors.FRMPathologieRespiratoireChronique}
            label="pathologie respiratoire chronique"
          />
          <CheckBoxView
            value={factors.FRMCancerSousTraitement}
            label="cancer sous traitement"
          />
          <CheckBoxView
            value={factors.FRMInsRenaleDialysee}
            label="insuffisance rénale dialysée"
          />
          <CheckBoxView
            value={factors.FRMImmunoDepression}
            label="immunodépression (médicament, VIH)"
          />
          <CheckBoxView
            value={factors.FRMCirrhoseB}
            label="cirrhose >= stade B"
          />
          <CheckBoxView value={factors.FRMThrombose} label="thrombose" />
          <TextareaView value={factors.FRMAutre} label="autre" />
          <CheckBoxView
            value={factors.FRMProcheFragile}
            label="Présence d'un proche fragile au domicile"
          />
        </Box>
        <Box sx={twoColumnStyle}>
          <CheckBoxView label="isolement" value={factors.FRSEIsolement} />
          <CheckBoxView
            label="précarité socio-économique"
            value={factors.FRSEPrecariteSociEco}
          />
          <CheckBoxView
            label="difficulté linguistique"
            value={factors.FRSEDifficulteLinguistique}
          />
          <CheckBoxView
            label="troubles neuro/psy"
            value={factors.FRSETroublesNeuroPsy}
          />
          <CheckBoxView
            label="pas de moyen de communication"
            value={factors.FRSEPasMoyenCommunication}
          />
          <TextareaView label="Aidant éventuel" value={factors.FRSEAidant} />
          <TextareaView label="Remarques" value={factors.FRSERemarques} />
          <CheckBoxView
            label="Pièce de confinement disponible"
            value={factors.FRSEPieceConfinement}
          />
        </Box>
      </Flex>
    </Card>
  );
};

export { PatientFactorsView };
