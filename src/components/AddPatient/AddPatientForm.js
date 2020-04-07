import { Formik } from "formik";
import React from "react";
import { Box, Flex, Button } from "rebass";
import { Label, Input } from "@rebass/forms";

import { patientSchema } from "../../lib/validationSchemas";

const AddPatientForm = (props) => {
  const { patient, handleSubmit } = props;

  return (
    <Formik
      initialValues={{
        lastname: patient ? patient.lastname : "",
        firstname: patient ? patient.firstname : "",
        dob: patient ? patient.dob : "",
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
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box mb={4}>
            <Label htmlFor="lastname">Nom du patient</Label>
            <Input
              value={values.lastname}
              id="lastname"
              name="lastname"
              hasError={touched.lastname && errors.lastname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Box>
          <Box mb={4}>
            <Label htmlFor="firstname">Prénom du patient</Label>
            <Input
              value={values.firstname}
              id="firstname"
              name="firstname"
              hasError={touched.firstname && errors.firstname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Box>
          <Box mb={4}>
            <Label htmlFor="dob">Date de naissance</Label>
            <Input
              value={values.dob}
              type="date"
              id="dob"
              name="dob"
              hasError={touched.dob && errors.dob}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Box>
          <Flex alignItems="center" justifyContent="flex-end">
            <Box>
              <Button type="submit" disabled={isSubmitting}>
                Enregistrer
              </Button>
            </Box>
          </Flex>
        </form>
      )}
    </Formik>
  );
};

export { AddPatientForm };
