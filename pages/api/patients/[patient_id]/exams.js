import { Exam } from "../../../../src/models";

export default async (req, res) => {
  const patientIdAsString = req.query.patient_id;
  const patientId = parseInt(patientIdAsString);

  if (req.method === "POST") {
    const data = JSON.parse(req.body);
    const formattedData = {
      ...data,
      examDate: (data.examDate && new Date(data.examDate)) || null,
    };
    if (data.id) {
      await Exam.query()
        .findById(data.id)
        .patch({
          ...formattedData,
        });
    } else {
      await Exam.query().insert({ ...formattedData, patientId });
    }
  }

  const exams = await Exam.query()
    .where({ patientId })
    .orderBy("examDate", "desc");

  res.status(200).json(exams || []);
};
