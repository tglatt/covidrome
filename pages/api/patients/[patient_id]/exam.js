import patients from "../../patients.json";

export default (req, res) => {
  const patientIdAsString = req.query.patient_id;
  const patientId = parseInt(patientIdAsString);
  const patient = patients.find((patient) => patient.id == patientId);

  if (req.method === "POST") {
    const data = JSON.parse(req.body);
    const examList = patient.exams
      ? patient.exams.push({ ...data })
      : [{ ...data }];
    patient.exams = examList;
    res.status(201).json(patient);
  } else {
    res.status(400);
  }
};
