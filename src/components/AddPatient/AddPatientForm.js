import { Form, Formik } from "formik";
import React from "react";
import { Box, Flex, Button } from "rebass";

import { patientSchema } from "../../lib/validationSchemas";

import { Field } from "../../ui";

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
      {({ isSubmitting }) => (
        <Form>
          <Field name="lastname" label="Nom du patient" />
          <Field name="firstname" label="Prénom du patient" />
          <Field name="dob" label="Date de naissance" type="date" />
          <Flex alignItems="center" justifyContent="flex-end">
            <Box>
              <Button type="submit" disabled={isSubmitting}>
                Enregistrer
              </Button>
            </Box>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export { AddPatientForm };
