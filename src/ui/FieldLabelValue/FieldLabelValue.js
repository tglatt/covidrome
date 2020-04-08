import React from "react";
import { Flex, Box, Text } from "rebass";

import { FieldLabel } from "../FieldLabel";
import { content } from "./style";

const FieldLabelValue = ({ label, value }) => (
  <Flex>
    <Box width={1 / 2}>
      <FieldLabel label={label} />
    </Box>
    <Text sx={content}>
      {value}
    </Text>
  </Flex>
);

export { FieldLabelValue };
