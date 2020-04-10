import React from "react";
import { Flex, Box, Text } from "rebass";

import { FieldLabel } from "../FieldLabel";
import { content, wrapperStyle } from "./style";

const TextareaView = ({ label, value }) => (
  <Flex flexDirection="column" sx={wrapperStyle}>
    <Box>
      <FieldLabel label={`${label}:`} />
    </Box>
    <Box sx={content}>{value ? value : " - "}</Box>
  </Flex>
);

export { TextareaView };
