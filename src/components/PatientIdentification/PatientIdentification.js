import React, { Fragment, useState } from "react";
import useSWR from "swr";
import { updatePatient } from "../../lib/endpoints";
import { fetcher } from "../../lib/fetcher";
import { PatientIdentificationForm } from "./PatientIdentificationForm";
import { PatientIdentificationView } from "./PatientIdentificationView";

const PatientIdentification = ({ patientId }) => {
  const { data: patient, error, isValidating, mutate } = useSWR(
    `/api/patients/${patientId}`,
    fetcher
  );

  const [edit, setEdit] = useState(false);

  if (error) {
    return <div>error while fetching patient></div>;
  }
  if (!patient) {
    return <div>loading patient...></div>;
  }

  const handleSubmit = async (values, { setSubmitting }) => {
    await mutate(updatePatient({ id: patient.id, ...values }));
    setSubmitting(false);
    setEdit(false);
  };

  const handleEdit = () => {
    setEdit(true);
  };

  const handleCancel = () => {
    setEdit(false);
  };

  return (
    <Fragment>
      {edit ? (
        <PatientIdentificationForm
          patient={patient}
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
        />
      ) : (
        <PatientIdentificationView patient={patient} handleEdit={handleEdit} />
      )}
    </Fragment>
  );
};

export { PatientIdentification };
