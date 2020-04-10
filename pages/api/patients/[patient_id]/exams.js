import { Exam } from "../../../../src/models";

export default async (req, res) => {
  const patientIdAsString = req.query.patient_id;
  const patientId = parseInt(patientIdAsString);

  if (req.method === "POST") {
    const data = JSON.parse(req.body);
    if (data.id) {
      await Exam.query()
        .findById(data.id)
        .patch({
          ...data,
        });
    } else {
      await Exam.query().insert({ ...data, patientId });
    }
  }

  const exams = await Exam.query().where({ patientId }).orderBy("id", "desc");

  res.status(200).json(exams || []);
};
