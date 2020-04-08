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
  FRMThrombose: yup.boolean(),
  FRMAutre: yup.string(),
  FRMProcheFragile: yup.boolean(),
  FRSEIsolement: yup.boolean(),
  FRSEPrecariteSociEco: yup.boolean(),
  FRSEDifficulteLinguistique: yup.boolean(),
  FRSETroublesNeuroPsy: yup.boolean(),
  FRSEPasMoyenCommunication: yup.boolean(),
  FRSEAidant: yup.string(),
  FRSERemarques: yup.string(),
  FRSEPieceConfinement: yup.boolean(),
});

const patientExamSchema = (physicians, nurses) =>
  yup.object().shape({
    examDate: yup.date().required(),
    physician: yup.mixed().oneOf(physicians),
    nurse: yup.mixed().oneOf(nurses),
    toux: yup.boolean(),
    expectorations: yup
      .mixed()
      .oneOf([
        "absentes",
        "translucides",
        "mousseuses",
        "purulentes",
        "hémoptoïques",
      ]),
    temperature: yup.number(),
    poids: yup.number(),
    syndromeGrippal: yup.boolean(),
    signesORIHauts: yup.boolean(),
    anosmie: yup.boolean(),
    agueusie: yup.boolean(),
    dyspnee: yup.boolean(),
    conjonctivite: yup.boolean(),
    deshydratation: yup.boolean(),
    diarrhee: yup.boolean(),
    etatConscience: yup
      .mixed()
      .oneOf(["normal", "ralentissement", "somnolence", "comateux"]),
    frequenceRespi: yup.number(),
    SPO2Saturometre: yup.string(),
    SPO2ROTH: yup.mixed().oneOf(["< 10 / 7sec", "< 7 / 5 sec", "> 30"]),
    PA: yup.string(),
    pouls: yup.number(),
    marbrures: yup.boolean(),
    autre: yup.string(),
  });

export { patientExamSchema, patientFactorsSchema, patientInfoSchema };
