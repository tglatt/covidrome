import { Box } from "rebass";

import { AddPatientForm } from "./AddPatientForm";

const AddPatient = () => {
  const handleSubmit = async (values, { setSubmitting, setStatus }) => {
    setSubmitting(false);
  };

  return (
    <Box p={5}>
      <AddPatientForm handleSubmit={handleSubmit} />
    </Box>
  );
};

export { AddPatient };
