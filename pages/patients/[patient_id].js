import { Layout } from "../../src/components/Layout";
import { PatientIdentification } from "../../src/components/PatientIdentification";

const PatientPage = ({ patientId }) => {
  return (
    <Layout>
      <PatientIdentification patientId={patientId} />
    </Layout>
  );
};

PatientPage.getInitialProps = async ({ query }) => {
  return { patientId: query.patient_id };
};

export default PatientPage;
