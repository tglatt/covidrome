import useSWR from "swr";
import { Box } from "rebass";
import { Layout } from "../../src/components/Layout";
import { PatientExam } from "../../src/components/PatientExam";
import { PatientFactors } from "../../src/components/PatientFactors";
import { PatientIdentification } from "../../src/components/PatientIdentification";
import { fetcher } from "../../src/lib/fetcher";
import { BoxWrapper } from "../../src/ui";

const PatientPage = ({ patientId }) => {
  const { data: patient, error, mutate } = useSWR(
    `/api/patients/${patientId}`,
    fetcher
  );

  const { data: medecins, errorMedecins } = useSWR(`/api/medecins`, fetcher);
  const { data: IDEs, errorIDEs } = useSWR(`/api/IDEs`, fetcher);

  return (
    <Layout>
      {error && <div>Failed to fetch patient</div>}

      {patient ? (
        <BoxWrapper>
          <Box mb={2}>
            <PatientIdentification patient={patient} mutate={mutate} />
          </Box>
          <Box mb={2}>
            <PatientFactors patientId={patientId} />
          </Box>
          {errorMedecins && <div>Failed to fetch medecins</div>}
          {errorIDEs && <div>Failed to fetch IDEs</div>}
          {medecins && IDEs && (
            <PatientExam patient={patient} medecins={medecins} IDEs={IDEs} />
          )}
        </BoxWrapper>
      ) : (
        <div>Loading...</div>
      )}
    </Layout>
  );
};

PatientPage.getInitialProps = async ({ query }) => {
  return { patientId: query.patient_id };
};

export default PatientPage;
