const saveExam = async (patientId, exam) => {
  const res = await fetch(`/api/patients/${patientId}/exams/${exam.id}`, {
    method: "post",
    body: JSON.stringify(exam),
  });
  return res;
};

export default saveExam;
