import { RiskFactor } from "../../../../src/models";

export default async (req, res) => {
  const patientIdAsString = req.query.patient_id;
  const patientId = parseInt(patientIdAsString);

  if (req.method === "POST") {
    const data = JSON.parse(req.body);
    if (data.id) {
      await RiskFactor.query()
        .findById(data.id)
        .patch({
          ...data,
        });
    } else {
      await RiskFactor.query().insert({ ...data, patientId });
    }
  }

  const [riskFactor] = await RiskFactor.query().where({ patientId });

  res.status(200).json(riskFactor || {});
};
