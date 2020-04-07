import patients from "../patients.json";

export default (req, res) => {
  const patientIdAsString = req.query.patient_id;
  const patientId = parseInt(patientIdAsString);
  const patient = patients.find(patient => patient.id == patientId);
  res.status(200).json(patient);
};
