const updatePatient = async patient => {
  const res = await fetch(`/api/patients/${patient.id}`, {
    method: "PUT",
    body: JSON.stringify(patient)
  });
  return res;
};

export default updatePatient;
