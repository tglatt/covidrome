const saveOrUpdateExam = async (patientId, exam) => {
  const res = await fetch(`/api/patients/${patientId}/exam`, {
    method: "post",
    body: JSON.stringify(exam),
  });
  return res;
};

export default saveOrUpdateExam;
