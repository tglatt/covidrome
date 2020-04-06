import { Flex, Text } from "rebass";

const Footer = () => (
  <Flex
    sx={{
      minHeight: "100%",
      background: "gray"
    }}
  >
    <Text p={2} color="white">
      Footer
    </Text>
  </Flex>
);

export { Footer };
