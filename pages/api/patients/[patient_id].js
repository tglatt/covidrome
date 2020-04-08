import { Patient } from "../../../src/models";

export default async (req, res) => {
  const patientIdAsString = req.query.patient_id;
  const patientId = parseInt(patientIdAsString);

  console.log(req.body);
  if (req.method === "PUT") {
    const patient = JSON.parse(req.body);
    await Patient.query()
      .findById(patientId)
      .patch(patient);
  }
  const patient = await Patient.query().findById(patientId);
  res.status(200).json(patient);
};
