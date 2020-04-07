import { Heading } from "rebass";
import { Layout } from "../../src/components/Layout";

const PatientPage = ({ patientId }) => {
  return (
    <Layout>
      <Heading>{patientId}</Heading>
    </Layout>
  );
};

PatientPage.getInitialProps = async ({ query }) => {
  return { patientId: query.patient_id };
};

export default PatientPage;
