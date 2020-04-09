import { Box, Button, Flex } from "rebass";
import { Card, twoColumnStyle, Heading3, FieldLabelValue } from "../../ui";
import { formatDate } from "../../lib/dates";

const PatientIdentificationView = ({ patient, handleEdit }) => {
  return (
    <Card>
      <Heading3>
        {patient.firstname} {patient.lastname}
      </Heading3>
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
      <Flex alignItems="center" justifyContent="flex-end">
        <Box>
          <Button onClick={handleEdit}>Editer</Button>
        </Box>
      </Flex>
    </Card>
  );
};

export { PatientIdentificationView };
