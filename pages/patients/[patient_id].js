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
      {!patient && <div>Loading...</div>}
      {error && <div>Failed to fetch patient</div>}

      {patient && (
        <BoxWrapper>
          <PatientIdentification patient={patient} />
          <PatientFactors></PatientFactors>
        </BoxWrapper>
      )}
    </Layout>
  );
};

PatientPage.getInitialProps = async ({ query }) => {
  return { patientId: query.patient_id };
};

export default PatientPage;
