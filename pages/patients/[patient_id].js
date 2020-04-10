import { Box } from "rebass";
import { Layout } from "../../src/components/Layout";
import { PatientExam } from "../../src/components/PatientExam";
import { PatientFactors } from "../../src/components/PatientFactors";
import { PatientIdentification } from "../../src/components/PatientIdentification";
import { BoxWrapper } from "../../src/ui";

const PatientPage = ({ patientId, edit }) => {
  return (
    <Layout>
      <BoxWrapper>
        <Box mb={2}>
          <PatientIdentification patientId={patientId} />
        </Box>
        <Box mb={2}>
          <PatientFactors patientId={patientId} />
        </Box>
        <Box mb={2}>
          <PatientExam patientId={patientId} />
        </Box>
      </BoxWrapper>
    </Layout>
  );
};

PatientPage.getInitialProps = async ({ query }) => {
  return { patientId: query.patient_id };
};

export default PatientPage;
