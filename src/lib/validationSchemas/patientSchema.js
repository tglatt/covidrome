import yup from "./yup";

const patientSchema = yup.object().shape({
  lastname: yup.string().required(),
  firstname: yup.string().required(),
  dob: yup.date().required()
});

export { patientSchema };
