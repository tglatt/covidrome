import React from "react";
import { Flex, Box, Text } from "rebass";

import { FieldLabel } from "../FieldLabel";
import { content } from "./style";

const FieldLabelValue = ({ label, value }) => (
  <Flex>
    <Box>
      <FieldLabel label={label} />
    </Box>
    <Text sx={content} ml={1}>
      {value}
    </Text>
  </Flex>
);

export { FieldLabelValue };
