import { Fragment, useState } from "react";
import { PatientFactorsForm } from "./PatientFactorsForm";
import { PatientFactorsView } from "./PatientFactorsView";

const PatientFactors = ({ patient }) => {
  const [edit, setEdit] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    // await mutate(updatePatient({ id: patient.id, ...values }));
    setSubmitting(false);
    setEdit(false);
  };

  const handleEdit = () => {
    setEdit(true);
  };

  return (
    <Fragment>
      {edit ? (
        <PatientFactorsForm patient={patient} handleSubmit={handleSubmit} />
      ) : (
        <PatientFactorsView patient={patient} handleEdit={handleEdit} />
      )}
    </Fragment>
  );
};

export { PatientFactors };
