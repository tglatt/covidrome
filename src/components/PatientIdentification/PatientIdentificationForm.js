import { Form, Formik } from "formik";
import React from "react";
import { Box, Flex, Button } from "rebass";

import { patientInfoSchema } from "../../lib/validationSchemas";
import { asDateString } from "../../lib/dates";

import { Card, Field, Heading3, twoColumnStyle } from "../../ui";

const PatientIdentificationForm = (props) => {
  const { patient, handleSubmit } = props;

  return (
    <Formik
      initialValues={{
        lastname: patient ? patient.lastname : "",
        firstname: patient ? patient.firstname : "",
        address: patient ? patient.address : "",
        ssn: patient ? patient.ssn : "",
        dob: (patient.dob && asDateString(patient.dob)) || "",
        phone: patient ? patient.phone : "",
        email: patient ? patient.email : "",
        physician: patient ? patient.physician : "",
      }}
      validationSchema={patientInfoSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Card>
          <Form>
            <Heading3>
              {patient.firstname} {patient.lastname}
            </Heading3>
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
        </Card>
      )}
    </Formik>
  );
};

export { PatientIdentificationForm };
