import { Box, Button, Flex } from "rebass";
import { Card, Heading3, FieldLabelValue, twoColumnStyle } from "../../ui";
import { formatDate } from "../../lib/dates";

const labelOf = (value) => (value ? "oui" : "non");

const PatientExamView = ({ exam, handleEdit }) => {
  return (
    <Card>
      <Flex>
        <Box sx={twoColumnStyle}>
          <Heading3>Examen</Heading3>
          <Box p={1}>
            <FieldLabelValue
              label="Date du bilan"
              value={formatDate(exam.examDate)}
            />
            <FieldLabelValue value={exam.physician} label="médecin" />
            <FieldLabelValue value={exam.nurse} label="IDE" />
            <FieldLabelValue value={labelOf(exam.toux)} label="toux" />
            <FieldLabelValue
              value={exam.expectorations}
              label="expectorations (aspect)"
            />
            <FieldLabelValue value={exam.temperature} label="température" />
            <FieldLabelValue value={exam.poids} label="poids" />
            <FieldLabelValue
              value={labelOf(exam.syndromeGrippal)}
              label="syndrôme grippal"
            />
            <FieldLabelValue
              value={labelOf(exam.signesORIHauts)}
              label="signes ORI hauts"
            />
            <FieldLabelValue value={labelOf(exam.anosmie)} label="anosmie" />
            <FieldLabelValue value={labelOf(exam.agueusie)} label="agueusie" />
            <FieldLabelValue value={labelOf(exam.dyspnee)} label="dyspnee" />
            <FieldLabelValue
              value={labelOf(exam.conjonctivite)}
              label="conjonctivite"
            />
            <FieldLabelValue
              value={labelOf(exam.deshydratation)}
              label="déshydrataion"
            />
            <FieldLabelValue value={labelOf(exam.diarrhee)} label="diarrhée" />
          </Box>
        </Box>
        <Box sx={twoColumnStyle}>
          <Heading3>Examen</Heading3>
          <Box p={1}>
            <FieldLabelValue
              value={exam.etatConscience}
              label="état de conscience"
            />
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
            <FieldLabelValue value={exam.pouls} label="pouls" />
            <FieldLabelValue
              value={labelOf(exam.marbrures)}
              label="marbrures"
            />
            <FieldLabelValue value={exam.autre} label="autre" />
          </Box>
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

export { PatientExamView };
