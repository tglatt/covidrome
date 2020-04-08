import React, { useState, Fragment } from "react";
import { PatientIdentificationForm } from "./PatientIdentificationForm";
import { PatientIdentificationView } from "./PatientIdentificationView";
import { updatePatient } from "../../lib/endpoints";

const PatientIdentification = ({ patient }) => {
  const [edit, setEdit] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log(patient.id);
    await updatePatient({ id: patient.id, ...values });
    setSubmitting(false);
    setEdit(false);
  };

  const handleEdit = () => {
    setEdit(true);
  };

  return (
    <Fragment>
      {edit ? (
        <PatientIdentificationForm
          patient={patient}
          handleSubmit={handleSubmit}
        />
      ) : (
        <PatientIdentificationView patient={patient} handleEdit={handleEdit} />
      )}
    </Fragment>
  );
};

export { PatientIdentification };
