import { Box, Card, Flex, Text } from "rebass";
import { patientListItem } from "./style";
import Router from "next/router";

const PatientListItem = ({ patient }) => (
  <Card
    p={1}
    m={1}
    sx={patientListItem}
    onClick={() => {
      Router.push(`/patients/${patient.id}`);
    }}
  >
    <Flex justifyContent="flex-start">
      <Box width={1 / 3}>
        <Text>{patient.lastname}</Text>
      </Box>
      <Box width={1 / 3}>
        <Text>{patient.firstname}</Text>
      </Box>
      <Box width={1 / 3}>
        <Text>{patient.dob}</Text>
      </Box>
    </Flex>
  </Card>
);

export { PatientListItem };
