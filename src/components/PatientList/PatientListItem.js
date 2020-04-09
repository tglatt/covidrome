import NextLink from "next/link";
import { Box, Card, Flex, Text } from "rebass";
import { patientListItem } from "./style";
import { formatDate } from "../../lib/dates";

const PatientListItem = ({ patient }) => (
  <NextLink href="/patients/[patient_id]" as={`/patients/${patient.id}`}>
    <Card p={1} m={1} sx={patientListItem}>
      <Flex justifyContent="flex-start">
        <Box width={1 / 3}>
          <Text>{patient.lastname}</Text>
        </Box>
        <Box width={1 / 3}>
          <Text>{patient.firstname}</Text>
        </Box>
        <Box width={1 / 3}>
          <Text>{formatDate(patient.dob)}</Text>
        </Box>
      </Flex>
    </Card>
  </NextLink>
);

export { PatientListItem };
