const patients = [
  {
    id: 1,
    firstname: "Adèle",
    lastname: "GLATT",
    dob: "14 novembre 2015"
  },
  {
    id: 2,
    firstname: "Jean",
    lastname: "EIFFEL",
    dob: "12 mai 1982"
  },
  {
    id: 3,
    firstname: "Albert",
    lastname: "CAMUS",
    dob: "12 mai 1982"
  },
  {
    id: 4,
    firstname: "Emile",
    lastname: "ZOLA",
    dob: "12 mai 1982"
  }
];

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
