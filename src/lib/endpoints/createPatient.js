const createPatient = async (patient) => {
  const res = await fetch("api/patients", {
    method: "post",
    body: JSON.stringify(patient),
  });
  return res.json();
};

export default createPatient;
