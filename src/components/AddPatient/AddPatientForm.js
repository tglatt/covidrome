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
        address: patient ? patient.address : "",
        ssn: patient ? patient.ssn : "",
        dob: patient ? patient.dob : "",
        phone: patient ? patient.phone : "",
        email: patient ? patient.email : "",
        physician: patient ? patient.physician : "",
      }}
      validationSchema={patientSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field name="lastname" label="Nom du patient" />
          <Field name="firstname" label="Prénom du patient" />
          <Field name="address" label="Adresse" />
          <Field name="ssn" label="N° de sécurité sociale" />
          <Field name="dob" label="Date de naissance" type="date" />
          <Field name="phone" label="Téléphone" />
          <Field name="email" label="Courriel" type="email" />
          <Field name="physician" label="Médecin Généraliste" />
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
