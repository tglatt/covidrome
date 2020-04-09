const addExam = async (patientId, exam) => {
  const res = await fetch(`/api/patients/${patientId}/exams/`, {
    method: "post",
    body: JSON.stringify(exam),
  });
  return res;
};

export default addExam;
