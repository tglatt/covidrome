export default (req, res) => {
  const patients = [
    {
      firstname: "Albert",
      lastname: "EINSTEIN",
      dob: "12 mai 1982"
    },
    {
      firstname: "Jean",
      lastname: "EIFFEL",
      dob: "12 mai 1982"
    },
    {
      firstname: "Albert",
      lastname: "CAMUS",
      dob: "12 mai 1982"
    },
    {
      firstname: "Emile",
      lastname: "ZOLA",
      dob: "12 mai 1982"
    }
  ];
  res.status(200).json(patients);
};
