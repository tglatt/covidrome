const saveOrUpdateExam = async (patientId, exam) => {
  const res = await fetch(`/api/patients/${patientId}/exams`, {
    method: "post",
    body: JSON.stringify(exam),
  });
  return res.json();
};

export default saveOrUpdateExam;
