import useSWR from "swr";
import { Box, Card, Flex, Button, Text } from "rebass";

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

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

const PatientList = () => {
  const { data, error } = useSWR("/api/patients", fetcher);

  if (!data) return <div>Loading...</div>;

  if (error) return <div>Failed to fetch patient list</div>;

  return (
    <Box>
      {data.map(patient => (
        <PatientListItem patient={patient} />
      ))}
    </Box>
  );
};

export { PatientList };
