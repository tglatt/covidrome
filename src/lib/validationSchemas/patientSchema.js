import yup from "./yup";

const patientInfoSchema = yup.object().shape({
  lastname: yup.string().required(),
  firstname: yup.string().required(),
  address: yup.string().required(),
  ssn: yup.string().length(13).required(),
  dob: yup.date().required(),
  phone: yup.string().length(10).required(),
  email: yup.string().email().required(),
  physician: yup.string().required(),
});

const patientFactorsSchema = yup.object().shape({
  FRMHTA: yup.boolean(),
  FRMSup70: yup.boolean(),
  FRMIMCSup40: yup.boolean(),
  FRMEnceinte: yup.boolean(),
  FRMPathologieCardiaque: yup.boolean(),
  FRMPathologieDiabete: yup.boolean(),
  FRMPathologieRespiratoireChronique: yup.boolean(),
  FRMCancerSousTraitement: yup.boolean(),
  FRMInsRenaleDialysee: yup.boolean(),
  FRMImmunodepression: yup.boolean(),
  FRMCirrhoseB: yup.boolean(),
  FRSEIsolement: yup.boolean(),
  FRSEPrecariteSociEco: yup.boolean(),
  FRSEDifficulteLinguistique: yup.boolean(),
  FRSETroublesNeuroPsy: yup.boolean(),
  FRSEPasMoyenCommunication: yup.boolean(),
});

export { patientFactorsSchema, patientInfoSchema };
