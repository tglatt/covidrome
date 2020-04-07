import patients from "./patients.json";

export default (req, res) => {
  if (req.method === "POST") {
    const data = JSON.parse(req.body);
    const patient = { id: patients.length, ...data };
    patients.push(patient);
    res.status(201).json(patient);
  } else {
    res.status(200).json(patients);
  }
};
