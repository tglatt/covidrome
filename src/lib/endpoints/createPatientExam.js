const createPatientExam = async (patient, exam) => {
  const res = await fetch(`/api/patients/${patient.id}/exam`, {
    method: "post",
    body: JSON.stringify(exam),
  });
  return res;
};

export default createPatientExam;
