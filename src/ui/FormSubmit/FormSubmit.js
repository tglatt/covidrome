import React from "react";
import { Box, Button, Flex } from "rebass";
import { ActionLink } from "../";

const FormSubmit = ({
  disabled,
  handleCancel,
  labelSubmit = "Enregistrer",
  labelCancel = "annuler",
}) => (
  <Flex alignItems="baseline" justifyContent="flex-end">
    {handleCancel && (
      <ActionLink handleClick={handleCancel} fontSize={2} label={labelCancel} />
    )}
    <Box ml={1}>
      <Button type="submit" disabled={disabled}>
        {labelSubmit}
      </Button>
    </Box>
  </Flex>
);

export { FormSubmit };
