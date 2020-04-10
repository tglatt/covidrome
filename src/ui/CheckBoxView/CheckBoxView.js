import React from "react";
import { Box, Text } from "rebass";
import { checkBoxViewStyle, wrapperStyle } from "./style";

const CheckBoxView = ({ label, value }) => {
  return (
    <Box sx={wrapperStyle}>
      <Text sx={checkBoxViewStyle(value)}>{label}</Text>
    </Box>
  );
};

export { CheckBoxView };
