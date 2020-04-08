import useSWR from "swr";
import { fetcher } from "../../src/lib/fetcher";
import { Layout } from "../../src/components/Layout";
import { PatientIdentification } from "../../src/components/PatientIdentification";
import { BoxWrapper } from "../../src/ui";
import { PatientFactors } from "../../src/components/PatientFactors";
import { PatientExam } from "../../src/components/PatientExam";

const PatientPage = ({ patientId }) => {
  const { data: patient, error } = useSWR(
    `/api/patients/${patientId}`,
    fetcher
  );
  const { data: medecins, errorMedecins } = useSWR(`/api/medecins`, fetcher);
  const { data: IDEs, errorIDEs } = useSWR(`/api/IDEs`, fetcher);
  return (
    <Layout>
      {error && <div>Failed to fetch patient</div>}

      {patient ? (
        <BoxWrapper>
          <PatientIdentification patient={patient} />
          <PatientFactors patient={patient} />
          {errorMedecins && <div>Failed to fetch medecins</div>}
          {errorIDEs && <div>Failed to fetch IDEs</div>}
          {medecins && IDEs && (
            <PatientExam patient={patient} medecins={medecins} IDEs={IDEs} />
          )}
        </BoxWrapper>
      ) : (
        <div>Loading...</div>
      )}
    </Layout>
  );
};

PatientPage.getInitialProps = async ({ query }) => {
  return { patientId: query.patient_id };
};

export default PatientPage;
