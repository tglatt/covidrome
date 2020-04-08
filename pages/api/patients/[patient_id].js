import { Patient } from "../../../src/models";

export default async (req, res) => {
  const patientIdAsString = req.query.patient_id;
  const patientId = parseInt(patientIdAsString);
  const patient = await Patient.query().findById(patientId);
  res.status(200).json(patient);
};
