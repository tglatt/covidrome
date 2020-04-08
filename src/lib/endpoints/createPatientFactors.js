const createPatientFactors = async (patient, factors) => {
  const res = await fetch(`/api/patients/${patient.id}/factors`, {
    method: "post",
    body: JSON.stringify(factors),
  });
  return res;
};

export default createPatientFactors;
