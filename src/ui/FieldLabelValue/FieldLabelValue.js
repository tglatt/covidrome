import React from "react";
import { Flex, Box, Text } from "rebass";

import { FieldLabel } from "../FieldLabel";
import { content, wrapperStyle } from "./style";

const FieldLabelValue = ({ label, value }) => (
  <Flex sx={wrapperStyle}>
    <Box>
      <FieldLabel label={label} />
    </Box>
    <Text sx={content} ml={1}>
      {value ? value : " - "}
    </Text>
  </Flex>
);

export { FieldLabelValue };
