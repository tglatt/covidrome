import React from "react";
import { Box, Text } from "rebass";
import { checkBoxViewStyle } from "./style";

const CheckBoxView = ({ label, value }) => {
  return (
    <Box>
      <Text sx={checkBoxViewStyle(value)}>{label}</Text>
    </Box>
  );
};

export { CheckBoxView };
