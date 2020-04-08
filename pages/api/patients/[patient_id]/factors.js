import { Patient } from "../../../../src/models";

export default async (req, res) => {
  const patientIdAsString = req.query.patient_id;
  const patientId = parseInt(patientIdAsString);
  const patient = await Patient.query().findById(patientId);

  if (req.method === "POST") {
    const data = JSON.parse(req.body);
    patient.factors = { ...data };
    res.status(201).json(patient);
  } else {
    res.status(400);
  }
};
