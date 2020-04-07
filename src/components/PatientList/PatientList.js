import useSWR from "swr";
import { Box } from "rebass";
import { PatientListItem } from "./PatientListItem";
import { fetcher } from "../../lib/fetcher";

const PatientList = () => {
  const { data, error } = useSWR("/api/patients", fetcher);

  if (!data) return <div>Loading...</div>;

  if (error) return <div>Failed to fetch patient list</div>;

  return (
    <Box>
      {data.map(patient => (
        <PatientListItem key={patient.id} patient={patient} />
      ))}
    </Box>
  );
};

export { PatientList };
