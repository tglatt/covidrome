import { Patient } from "../../src/models";

export default async (req, res) => {
  if (req.method === "POST") {
    const { lastname, firstname, dob } = JSON.parse(req.body);
    const patient = await Patient.query()
      .allowGraph("[lastname, firstname, dob]")
      .insert({
        lastname,
        firstname,
        dob: new Date(dob)
      });
    res.status(201).json(patient);
  } else {
    const patients = await Patient.query();
    res.status(200).json(patients);
  }
};
