const saveOrUpdateRiskFactor = async (patientId, factors) => {
  const res = await fetch(`/api/patients/${patientId}/factors`, {
    method: "POST",
    body: JSON.stringify(factors),
  });
  return res;
};

export default saveOrUpdateRiskFactor;
