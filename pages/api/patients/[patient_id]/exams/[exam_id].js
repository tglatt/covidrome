import { Exam } from "../../../../../src/models";

export default async (req, res) => {
  const patientIdAsString = req.query.patient_id;
  const patientId = parseInt(patientIdAsString);
  const examIdAsString = req.query.exam_id;
  const examId = parseInt(examIdAsString);

  if (req.method === "POST") {
    const data = JSON.parse(req.body);
    await Exam.query()
      .findById(data.id)
      .patch({
        ...data,
      });
  }

  const exam = await Exam.query().where({ id: examId, patientId });

  res.status(200).json(exam || {});
};
