import React from "react";
import NextLink from "next/link";
import { Box, Flex } from "rebass";
import { Logo } from "../../ui/Logo";
import { headerLink } from "./style";

const Header = () => {
  return (
    <Flex alignItems="center" flexWrap="wrap" justifyContent="space-between">
      <NextLink href="/" passHref>
        <Box p={1} sx={headerLink}>
          <Logo hasTitle title="CoronaVille" />
        </Box>
      </NextLink>
    </Flex>
  );
};
export { Header };
