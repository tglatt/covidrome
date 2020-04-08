import { Layout } from "../../src/components/Layout";
import { PatientIdentification } from "../../src/components/PatientIdentification";
import { BoxWrapper } from "../../src/ui";
import { ExamSheet } from "../../src/components/ExamSheet";

const PatientPage = ({ patientId }) => {
  return (
    <Layout>
      <BoxWrapper>
        <PatientIdentification patientId={patientId} />
        <ExamSheet></ExamSheet>
      </BoxWrapper>
      >
    </Layout>
  );
};

PatientPage.getInitialProps = async ({ query }) => {
  return { patientId: query.patient_id };
};

export default PatientPage;
