import medecins from "./medecins.json";

export default (req, res) => {
  if (req.method === "GET") {
    res.status(200).json(medecins);
  } else {
    res.status(400);
  }
};
