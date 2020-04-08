import IDEs from "./IDEs.json";

export default (req, res) => {
  if (req.method === "GET") {
    res.status(200).json(IDEs);
  } else {
    res.status(400);
  }
};
