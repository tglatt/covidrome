import { useFormik } from "formik";
import React from "react";
import { Box, Flex, Button } from "rebass";
import { Label, Input } from "@rebass/forms";

import { patientSchema } from "../../lib/validationSchemas";

const AddPatientForm = props => {
  const { patient, handleSubmit } = props;

  const formik = useFormik({
    onSubmit: handleSubmit,
    validationSchema: patientSchema,
    initialValues: {
      lastname: patient ? patient.lastname : "",
      fistname: patient ? patient.fistname : "",
      dob: patient ? patient.fistname : ""
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box mb={4}>
        <Label htmlFor="lastname">Nom du patient</Label>
        <Input
          value={formik.values.lastname}
          id="lastname"
          name="lastname"
          hasError={formik.errors.lastname}
          onChange={formik.handleChange}
        />
      </Box>
      <Box mb={4}>
        <Label htmlFor="firstname">Prénom du patient</Label>
        <Input
          value={formik.values.firstname}
          id="firstname"
          name="firstname"
          hasError={formik.errors.firstname}
          onChange={formik.handleChange}
        />
      </Box>
      <Flex alignItems="center" justifyContent="flex-end">
        <Box>
          <Button type="submit">Enregistrer</Button>
        </Box>
      </Flex>
    </form>
  );
};

export { AddPatientForm };
