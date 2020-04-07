import patients from "./patients.json";
import { v4 as uuidv4 } from "uuid";

export default (req, res) => {
  if (req.method === "POST") {
    const data = JSON.parse(req.body);
    const patient = { id: uuidv4(), ...data };
    patients.push(patient);
    res.status(201).json(patient);
  } else {
    res.status(200).json(patients);
  }
};
