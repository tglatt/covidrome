import { Box, Flex, Text } from "rebass";
import useSWR from "swr";
import { fetcher } from "../../lib/fetcher";

const PatientIdentification = ({ patientId }) => {
  const { data: patient, error } = useSWR(
    `/api/patients/${patientId}`,
    fetcher
  );

  if (!patient) return <div>Loading...</div>;

  if (error) return <div>Failed to fetch patient</div>;

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
