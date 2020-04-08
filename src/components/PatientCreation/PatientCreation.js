import Router from "next/router";
import { Box } from "rebass";
import { createPatient } from "../../lib/endpoints";
import { PatientCreationForm } from "./PatientCreationForm";

const PatientCreation = () => {
  const handleSubmit = async (values, { setSubmitting, setStatus }) => {
    await createPatient(values);
    setSubmitting(false);

    Router.push("/");
  };

  return (
    <Box p={5}>
      <PatientCreationForm handleSubmit={handleSubmit} />
    </Box>
  );
};

export { PatientCreation };
