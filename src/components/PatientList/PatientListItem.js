import { Box, Card, Flex, Button, Text } from "rebass";

const PatientListItem = ({ patient }) => (
  <Card p={1} m={1}>
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
