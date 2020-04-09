import yup from "./yup";

const patientCreationSchema = yup.object().shape({
  lastname: yup.string().required(),
  firstname: yup.string().required(),
  dob: yup.date().required()
});

const patientInfoSchema = yup.object().shape({
  lastname: yup.string().required(),
  firstname: yup.string().required(),
  dob: yup.date().required(),
  address: yup.string().nullable(),
  ssn: yup.string().nullable().length(13),
  phone: yup.string().nullable().length(10),
  email: yup.string().nullable().email(),
  physician: yup.string().nullable()
});

const patientFactorsSchema = yup.object().shape({
  FRMHTA: yup.boolean(),
  FRMSup70: yup.boolean(),
  FRMImcSup40: yup.boolean(),
  FRMEnceinte: yup.boolean(),
  FRMPathologieCardiaque: yup.boolean(),
  FRMPathologieDiabete: yup.boolean(),
  FRMPathologieRespiratoireChronique: yup.boolean(),
  FRMCancerSousTraitement: yup.boolean(),
  FRMInsRenaleDialysee: yup.boolean(),
  FRMImmunoDepression: yup.boolean(),
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
  FRSEPieceConfinement: yup.boolean()
});

const expectorationsChoices = [
  "absentes",
  "translucides",
  "mousseuses",
  "purulentes",
  "hémoptoïques"
];

const etatConscienceChoices = [
  "normal",
  "ralentissement",
  "somnolence",
  "comateux"
];

const SPO2ROTHChoices = ["< 10 / 7sec", "< 7 / 5 sec", "> 30"];

const patientExamSchema = (physicians, nurses) =>
  yup.object().shape({
    examDate: yup.date().required(),
    physician: yup.mixed().oneOf(physicians),
    nurse: yup.mixed().oneOf(nurses),
    toux: yup.boolean(),
    expectorations: yup.mixed().oneOf(expectorationsChoices),
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
    etatConscience: yup.mixed().oneOf(etatConscienceChoices),
    frequenceRespi: yup.number(),
    SPO2Saturometre: yup.string(),
    SPO2ROTH: yup.mixed().oneOf(SPO2ROTHChoices),
    PA: yup.string(),
    pouls: yup.number(),
    marbrures: yup.boolean(),
    autre: yup.string()
  });

export {
  etatConscienceChoices,
  expectorationsChoices,
  patientExamSchema,
  patientFactorsSchema,
  patientInfoSchema,
  SPO2ROTHChoices,
  patientCreationSchema
};
