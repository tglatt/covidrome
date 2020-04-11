import { Box, Flex, Text, Link } from "rebass";
import {
  ActionLink,
  Card,
  Heading3,
  FieldLabelValue,
  CheckBoxView,
  fourColumnStyle,
  TextareaView,
} from "../../ui";
import { formatDate } from "../../lib/dates";

const PatientExamView = ({ exam, handleEdit }) => {
  return (
    <Card mb={1}>
      <Flex ml={1} flexDirection="column">
        <Flex mb={1}>
          <Heading3>
            {`Bilan du ${formatDate(exam.examDate)} par ${exam.physician} / ${
              exam.nurse
            }`}
          </Heading3>
          <ActionLink handleClick={handleEdit} label="éditer" />
        </Flex>
        <Flex>
          <Box sx={fourColumnStyle}>
            <FieldLabelValue
              value={exam.frequenceRespi}
              label="fréquence respi X/mn"
            />
            <FieldLabelValue
              value={exam.SPO2Saturometre}
              label="SPO2 Saturomètre"
            />
            <FieldLabelValue value={exam.SPO2ROTH} label="SPO2 ROTH" />
            <FieldLabelValue value={exam.PA} label="PA" />
          </Box>
          <Box sx={fourColumnStyle}>
            <FieldLabelValue value={exam.temperature} label="température" />
            <FieldLabelValue value={exam.poids} label="poids" />
            <FieldLabelValue value={exam.pouls} label="pouls" />
            <FieldLabelValue
              value={exam.expectorations}
              label="expectorations (aspect)"
            />
            <FieldLabelValue
              value={exam.etatConscience}
              label="état de conscience"
            />
          </Box>
          <Box sx={fourColumnStyle}>
            <CheckBoxView value={exam.toux} label="toux" />

            <CheckBoxView
              value={exam.syndromeGrippal}
              label="syndrôme grippal"
            />
            <CheckBoxView
              value={exam.signesORIHauts}
              label="signes ORI hauts"
            />
            <CheckBoxView value={exam.anosmie} label="anosmie" />
            <CheckBoxView value={exam.agueusie} label="agueusie" />
          </Box>
          <Box sx={fourColumnStyle}>
            <CheckBoxView value={exam.dyspnee} label="dyspnee" />
            <CheckBoxView value={exam.conjonctivite} label="conjonctivite" />
            <CheckBoxView value={exam.deshydratation} label="déshydrataion" />
            <CheckBoxView value={exam.diarrhee} label="diarrhée" />
            <CheckBoxView value={exam.marbrures} label="marbrures" />
            <TextareaView value={exam.autre} label="autre" />
          </Box>
        </Flex>
      </Flex>
    </Card>
  );
};

export { PatientExamView };
