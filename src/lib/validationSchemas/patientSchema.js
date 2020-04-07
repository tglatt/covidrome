import yup from "./yup";

const patientSchema = yup.object().shape({
  lastname: yup.string().required(),
  firstname: yup.string().required(),
  address: yup.string().required(),
  ssn: yup.string().length(13).required(),
  dob: yup.date().required(),
  phone: yup.string().length(10).required(),
  email: yup.string().email().required(),
  physician: yup.string().required(),
});

export { patientSchema };
