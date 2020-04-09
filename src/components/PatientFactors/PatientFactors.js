import { Fragment, useState } from "react";
import useSWR from "swr";
import { PatientFactorsForm } from "./PatientFactorsForm";
import { PatientFactorsView } from "./PatientFactorsView";
import { saveOrUpdateRiskFactor } from "../../lib/endpoints";
import { fetcher } from "../../lib/fetcher";
import { asBoolean } from "../../../src/lib/boolean";

const PatientFactors = ({ patientId, initialEdit }) => {
  const { data: riskFactor, error, mutate } = useSWR(
    `/api/patients/${patientId}/factors`,
    fetcher
  );

  const [edit, setEdit] = useState(initialEdit);

  const handleSubmit = async (values, { setSubmitting }) => {
    const data = {
      FRMHTA: asBoolean(values.FRMHTA),
      FRMSup70: asBoolean(values.FRMSup70),
      FRMImcSup40: asBoolean(values.FRMImcSup40),
      FRMEnceinte: asBoolean(values.FRMEnceinte),
      FRMPathologieCardiaque: asBoolean(values.FRMPathologieCardiaque),
      FRMPathologieDiabete: asBoolean(values.FRMPathologieDiabete),
      FRMPathologieRespiratoireChronique: asBoolean(
        values.FRMPathologieRespiratoireChronique
      ),
      FRMCancerSousTraitement: asBoolean(values.FRMCancerSousTraitement),
      FRMInsRenaleDialysee: asBoolean(values.FRMInsRenaleDialysee),
      FRMImmunoDepression: asBoolean(values.FRMImmunoDepression),
      FRMCirrhoseB: asBoolean(values.FRMCirrhoseB),
      FRMThrombose: asBoolean(values.FRMThrombose),
      FRMAutre: values.FRMAutre ? values.FRMAutre : null,
      FRMProcheFragile: asBoolean(values.FRMProcheFragile),
      FRSEIsolement: asBoolean(values.FRSEIsolement),
      FRSEPrecariteSociEco: asBoolean(values.FRSEPrecariteSociEco),
      FRSEDifficulteLinguistique: asBoolean(values.FRSEDifficulteLinguistique),
      FRSETroublesNeuroPsy: asBoolean(values.FRSETroublesNeuroPsy),
      FRSEPasMoyenCommunication: asBoolean(values.FRSEPasMoyenCommunication),
      FRSEAidant: values.FRSEAidant ? values.FRSEAidant : null,
      FRSERemarques: values.FRSERemarques ? values.FRSERemarques : null,
      FRSEPieceConfinement: asBoolean(values.FRSEPieceConfinement),
    };

    await mutate(saveOrUpdateRiskFactor(patientId, { ...riskFactor, ...data }));
    setSubmitting(false);
    setEdit(false);
  };

  const handleEdit = () => {
    setEdit(true);
  };

  if (!riskFactor) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>error while fetching risk factors</div>;
  }

  return (
    <Fragment>
      {edit ? (
        <PatientFactorsForm
          riskFactor={riskFactor}
          handleSubmit={handleSubmit}
        />
      ) : (
        <PatientFactorsView riskFactor={riskFactor} handleEdit={handleEdit} />
      )}
    </Fragment>
  );
};

export { PatientFactors };
