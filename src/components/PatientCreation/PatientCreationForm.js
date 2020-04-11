import React from "react";
import Router from "next/router";
import { Form, Formik } from "formik";

import { patientCreationSchema } from "../../lib/validationSchemas";

import { Field, FormSubmit } from "../../ui";

const initialValues = (patient) => ({
  lastname: patient.lastname || "",
  firstname: patient.firstname || "",
  dob: patient.dob || "",
});

const PatientCreationForm = (props) => {
  const { patient, handleSubmit } = props;

  return (
    <Formik
      initialValues={initialValues(patient || {})}
      validationSchema={patientCreationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field name="lastname" label="Nom du patient" />
          <Field name="firstname" label="Prénom du patient" />
          <Field name="dob" label="Date de naissance" type="date" />
          <FormSubmit
            disabled={isSubmitting}
            handleCancel={() => Router.push("/")}
          />
        </Form>
      )}
    </Formik>
  );
};

export { PatientCreationForm };
