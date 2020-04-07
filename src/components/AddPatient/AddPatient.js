import { Box } from "rebass";

import { AddPatientForm } from "./AddPatientForm";
import { createPatient } from "../../lib/endpoints";
import Router from "next/router";

const AddPatient = () => {
  const handleSubmit = async (values, { setSubmitting, setStatus }) => {
    await createPatient(values);
    setSubmitting(false);

    Router.push("/");
  };

  return (
    <Box p={5}>
      <AddPatientForm handleSubmit={handleSubmit} />
    </Box>
  );
};

export { AddPatient };
