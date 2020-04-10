import { Patient } from "../../../src/models";

export default async (req, res) => {
  const patientIdAsString = req.query.patient_id;
  const patientId = parseInt(patientIdAsString);

  if (req.method === "PUT") {
    const patient = JSON.parse(req.body);
    await Patient.query()
      .findById(patientId)
      .patch({
        ...patient,
        dob: (patient.dob && new Date(patient.dob)) || "",
      });
  }
  const patient = await Patient.query().findById(patientId);
  res.status(200).json(patient);
};
