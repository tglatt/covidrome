import useSWR from "swr";
import { Fragment } from "react";

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

const PatientList = () => {
  const { data, error } = useSWR("/api/patients", fetcher);

  if (!data) return <div>Loading...</div>;

  if (error) return <div>Failed to fetch patient list</div>;

  return data.map(patient => {
    return (
      <div>
        <span>{patient.lastname}</span>
      </div>
    );
  });
};

export { PatientList };
