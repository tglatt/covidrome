import yup from "./yup";

const patientSchema = yup.object().shape({
  lastname: yup.string().required(),
  fistname: yup.string().required()
});

export { patientSchema };
