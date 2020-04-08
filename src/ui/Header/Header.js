import React from "react";
import { Box, Flex } from "rebass";
import { Logo } from "../Logo";

const Header = ({ hasTitle }) => {
  return (
    <Flex alignItems="center" flexWrap="wrap" justifyContent="space-between">
      <Box p={1}>
        <Logo hasTitle />
      </Box>
    </Flex>
  );
};

export { Header };
