import { Box } from "rebass";
// import useSWR from "swr";
import { Layout } from "../../src/components/Layout";
// import { PatientExam } from "../../src/components/PatientExam";
import { PatientFactors } from "../../src/components/PatientFactors";
import { PatientIdentification } from "../../src/components/PatientIdentification";
// import { fetcher } from "../../src/lib/fetcher";
import { BoxWrapper } from "../../src/ui";

const PatientPage = ({ patientId, edit }) => {
  // const { data: medecins, errorMedecins } = useSWR(`/api/medecins`, fetcher);
  // const { data: IDEs, errorIDEs } = useSWR(`/api/IDEs`, fetcher);

  return (
    <Layout>
      <BoxWrapper>
        <Box mb={2}>
          <PatientIdentification patientId={patientId} />
        </Box>
        <Box mb={2}>
          <PatientFactors patientId={patientId} initialEdit={edit} />
        </Box>
        {/* {errorMedecins && <div>Failed to fetch medecins</div>}
        {errorIDEs && <div>Failed to fetch IDEs</div>}
        {medecins && IDEs && (
          <PatientExam patient={patient} medecins={medecins} IDEs={IDEs} />
        )} */}
      </BoxWrapper>
    </Layout>
  );
};

PatientPage.getInitialProps = async ({ query }) => {
  return { patientId: query.patient_id, edit: query.edit };
};

export default PatientPage;
