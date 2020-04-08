import { Box, Flex, Text } from "rebass";

const PatientIdentification = ({ patient }) => {
  return (
    <Flex>
      <Box minWidth="200px" p={1}>
        <Text>{patient.surname}</Text>
      </Box>
      <Box minWidth="200px" p={1}>
        <Text>{patient.firstname}</Text>
      </Box>
      <Box minWidth="200px" p={1}>
        <Text>{patient.dob}</Text>
      </Box>
    </Flex>
  );
};

export { PatientIdentification };
