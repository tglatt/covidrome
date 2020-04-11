import { Box, Flex, Link } from "rebass";
import {
  ActionLink,
  Card,
  twoColumnStyle,
  Heading3,
  LinkButton,
  FieldLabelValue,
} from "../../ui";
import { formatDate } from "../../lib/dates";

const PatientIdentificationView = ({ patient, handleEdit }) => {
  return (
    <Card>
      <Flex alignItems="center">
        <Heading3 pl={1}>
          {patient.firstname} {patient.lastname}
        </Heading3>
        <ActionLink handleClick={handleEdit} label="éditer" />
      </Flex>
      <Flex>
        <Box sx={twoColumnStyle}>
          <FieldLabelValue
            label="Date de naissance"
            value={formatDate(patient.dob)}
          />
          <FieldLabelValue label="N° de sécurité sociale" value={patient.ssn} />
          <FieldLabelValue
            label="Médecin Généraliste"
            value={patient.physician}
          />
        </Box>
        <Box sx={twoColumnStyle}>
          <FieldLabelValue label="Courriel" value={patient.email} />
          <FieldLabelValue label="Adresse" value={patient.address} />
          <FieldLabelValue label="Téléphone" value={patient.phone} />
        </Box>
      </Flex>
    </Card>
  );
};

export { PatientIdentificationView };
