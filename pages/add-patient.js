import { Layout } from "../src/components/Layout";
import { PatientCreation } from "../src/components/PatientCreation";
import { BoxWrapper } from "../src/ui";

const PatientCreationPage = () => {
  return (
    <Layout>
      <BoxWrapper>
        <PatientCreation></PatientCreation>
      </BoxWrapper>
    </Layout>
  );
};

export default PatientCreationPage;
