import NextLink from "next/link";
import { Flex, Link as RebassLink, Text } from "rebass";
import { header, headerLink } from "./style";

const Header = () => (
  <Flex sx={header}>
    <NextLink href="/" passHref>
      <Text p={2} sx={headerLink}>
        CoviDrome
      </Text>
    </NextLink>
  </Flex>
);

export { Header };
