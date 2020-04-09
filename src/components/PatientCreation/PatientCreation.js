import Router from "next/router";
import { Box, Card } from "rebass";
import { createPatient } from "../../lib/endpoints";
import { PatientCreationForm } from "./PatientCreationForm";
import { Heading3 } from "../../ui";

const PatientCreation = () => {
  const handleSubmit = async (values, { setSubmitting, setStatus }) => {
    const patient = await createPatient(values);
    setSubmitting(false);

    Router.push(`/patients/${patient.id}`);
  };

  return (
    <Card p={5}>
      <Box mb={2}>
        <Heading3>Ajout d'un nouveau patient</Heading3>
      </Box>
      <PatientCreationForm handleSubmit={handleSubmit} />
    </Card>
  );
};

export { PatientCreation };
