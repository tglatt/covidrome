import { Formik } from "formik";
import React from "react";
import { Box, Flex, Button } from "rebass";
import { Label, Input } from "@rebass/forms";

import { patientSchema } from "../../lib/validationSchemas";

const AddPatientForm = props => {
  const { patient, handleSubmit } = props;

  return (
    <Formik
      initialValues={{
        lastname: patient ? patient.lastname : "",
        firstname: patient ? patient.firstname : "",
        dob: patient ? patient.dob : ""
      }}
      validationSchema={patientSchema}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <form onSubmit={handleSubmit}>
          <Box mb={4}>
            <Label htmlFor="lastname">Nom du patient</Label>
            <Input
              value={values.lastname}
              id="lastname"
              name="lastname"
              hasError={errors.lastname}
              onChange={handleChange}
            />
          </Box>
          <Box mb={4}>
            <Label htmlFor="firstname">Prénom du patient</Label>
            <Input
              value={values.firstname}
              id="firstname"
              name="firstname"
              hasError={errors.firstname}
              onChange={handleChange}
            />
          </Box>
          <Box mb={4}>
            <Label htmlFor="dob">Date de naissance</Label>
            <Input
              value={values.dob}
              type="date"
              id="dob"
              name="dob"
              hasError={errors.dob}
              onChange={handleChange}
            />
          </Box>
          <Flex alignItems="center" justifyContent="flex-end">
            <Box>
              <Button type="submit">Enregistrer</Button>
            </Box>
          </Flex>
        </form>
      )}
    </Formik>
  );
};

export { AddPatientForm };
