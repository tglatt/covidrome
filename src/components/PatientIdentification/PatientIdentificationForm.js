import { Form, Formik } from "formik";
import React from "react";
import { Box, Flex } from "rebass";

import { patientInfoSchema } from "../../lib/validationSchemas";
import { asDateString } from "../../lib/dates";

import { Card, Field, Heading3, FormSubmit, twoColumnStyle } from "../../ui";

const initialValues = (patient) => ({
  lastname: patient.lastname || "",
  firstname: patient.firstname || "",
  address: patient.address || "",
  ssn: patient.ssn || "",
  dob: (patient.dob && asDateString(patient.dob)) || "",
  phone: patient.phone || "",
  email: patient.email || "",
  physician: patient.physician || "",
});

const PatientIdentificationForm = ({ patient, handleSubmit, handleCancel }) => {
  return (
    <Formik
      initialValues={initialValues(patient || {})}
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
            <FormSubmit disabled={isSubmitting} handleCancel={handleCancel} />
          </Form>
        </Card>
      )}
    </Formik>
  );
};

export { PatientIdentificationForm };
