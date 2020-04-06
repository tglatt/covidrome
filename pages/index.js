import { Flex } from "rebass";
import { LinkButton } from "../src/ui";
import { Layout } from "../src/components/Layout";
import { PatientList } from "../src/components/PatientList";

export default () => {
  return (
    <Layout>
      <Flex flexDirection="column">
        <Flex justifyContent="flex-end" mr={2}>
          <LinkButton href="add-patient">Ajouter un patient</LinkButton>
        </Flex>
        <PatientList />
      </Flex>
    </Layout>
  );
};
