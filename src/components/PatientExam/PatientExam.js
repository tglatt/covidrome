import { Fragment, useState } from "react";
import { Box, Flex, Link } from "rebass";
import useSWR from "swr";
import { PatientExamForm } from "./PatientExamForm.js";
import { PatientExamView } from "./PatientExamView.js";
import { saveOrUpdateExam } from "../../lib/endpoints";
import { fetcher } from "../../lib/fetcher";
import { asBoolean } from "../../../src/lib/boolean";

const AddExamLink = ({ handleAddExam }) => (
  <Box ml={2}>
    <Link
      sx={{
        cursor: "pointer",
        fontSize: "1",
        textDecoration: "underline",
      }}
      onClick={handleAddExam}
    >
      ajouter un bilan
    </Link>
  </Box>
);

const PatientExam = ({ patientId }) => {
  const { data: exams, error, mutate } = useSWR(
    `/api/patients/${patientId}/exams`,
    fetcher
  );
  const { data: medecins, errorMedecins } = useSWR("/api/medecins", fetcher);
  const { data: IDEs, errorIDEs } = useSWR("/api/IDEs", fetcher);

  const [editting, setEditting] = useState([]);
  const [addingExam, setAddingExam] = useState(false);

  const handleSubmit = (exam) => async (values, { setSubmitting }) => {
    const data = {
      examDate: values.examDate ? values.examDate : null,
      physician: values.physician ? values.physician : null,
      nurse: values.nurse ? values.nurse : null,
      toux: asBoolean(values.toux),
      expectorations: values.expectorations ? values.expectorations : null,
      temperature: values.temperature ? values.temperature : null,
      poids: values.poids ? values.poids : null,
      syndromeGrippal: asBoolean(values.syndromeGrippal),
      signesORIHauts: asBoolean(values.signesORIHauts),
      anosmie: asBoolean(values.anosmie),
      agueusie: asBoolean(values.agueusie),
      dyspnee: asBoolean(values.dyspnee),
      conjonctivite: asBoolean(values.conjonctivite),
      deshydratation: asBoolean(values.deshydratation),
      diarrhee: asBoolean(values.diarrhee),
      etatConscience: values.etatConscience ? values.etatConscience : null,
      frequenceRespi: values.frequenceRespi ? values.frequenceRespi : null,
      SPO2Saturometre: values.SPO2Saturometre ? values.SPO2Saturometre : null,
      SPO2ROTH: values.SPO2ROTH ? values.SPO2ROTH : null,
      PA: values.PA ? values.PA : null,
      pouls: values.pouls ? values.pouls : null,
      marbrures: asBoolean(values.marbrures),
      autre: values.autre ? values.autre : null,
    };

    await mutate(saveOrUpdateExam(patientId, { ...exam, ...data }));

    setSubmitting(false);
    if (exam.id) {
      removeFromEditting(exam.id);
    } else {
      setAddingExam(false);
    }
  };

  const removeFromEditting = (examId) => {
    setEditting(editting.filter((id) => id !== examId));
  };

  const addToEditting = (examId) => {
    setEditting([...editting, examId]);
  };

  const handleAddingExam = () => {
    setAddingExam(true);
  };

  if (!exams || !medecins || !IDEs) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>error while fetching exam</div>;
  }
  if (errorMedecins) {
    return <div>error while fetching medecins</div>;
  }
  if (errorIDEs) {
    return <div>error while fetching IDEs</div>;
  }

  return (
    <Fragment>
      <Flex justifyContent="flex-end" mb={1}>
        <AddExamLink handleAddExam={handleAddingExam} />
      </Flex>
      {(exams.length === 0 || addingExam) && (
        <PatientExamForm
          exam={{}}
          medecins={medecins}
          IDEs={IDEs}
          handleSubmit={handleSubmit}
        />
      )}

      {exams.map((exam) => {
        return editting.includes(exam.id) ? (
          <PatientExamForm
            key={exam.id}
            exam={exam}
            medecins={medecins}
            IDEs={IDEs}
            handleSubmit={handleSubmit}
          />
        ) : (
          <PatientExamView
            key={exam.id}
            exam={exam}
            handleEdit={() => addToEditting(exam.id)}
          />
        );
      })}
    </Fragment>
  );
};

export { PatientExam };
