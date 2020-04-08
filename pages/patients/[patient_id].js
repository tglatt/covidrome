import useSWR from "swr";
import { fetcher } from "../../src/lib/fetcher";
import { Layout } from "../../src/components/Layout";
import { PatientIdentification } from "../../src/components/PatientIdentification";
import { BoxWrapper } from "../../src/ui";
import { PatientFactors } from "../../src/components/PatientFactors";

const PatientPage = ({ patientId }) => {
  const { data: patient, error } = useSWR(
    `/api/patients/${patientId}`,
    fetcher
  );
  return (
    <Layout>
      {error && <div>Failed to fetch patient</div>}

      {patient ? (
        <BoxWrapper>
          <PatientIdentification patient={patient} />
          <PatientFactors patient={patient}></PatientFactors>
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
