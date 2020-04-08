import React from "react";
import { Form, Formik } from "formik";
import { Box, Flex, Button } from "rebass";

import { patientInfoSchema } from "../../lib/validationSchemas";

import { Field, twoColumnStyle } from "../../ui";

const PatientCreationForm = props => {
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
        physician: patient ? patient.physician : ""
      }}
      validationSchema={patientInfoSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Flex>
            <Box sx={twoColumnStyle}>
              <Field name="lastname" label="Nom du patient" />
              <Field name="firstname" label="Prénom du patient" />
              <Field name="dob" label="Date de naissance" type="date" />
              <Field name="ssn" label="N° de sécurité sociale" />
              <Field name="physician" label="Médecin Généraliste" />
            </Box>
            <Box sx={twoColumnStyle}>
              <Field name="email" label="Courriel" type="email" />
              <Field name="address" label="Adresse" />
              <Field name="phone" label="Téléphone" />
            </Box>
          </Flex>
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

export { PatientCreationForm };
