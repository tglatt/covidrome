import { Flex, Text } from "rebass";

const Header = () => (
  <Flex
    sx={{
      minHeight: "100%",
      background: "gray"
    }}
  >
    <Text p={2} color="white">
      CoviDrome
    </Text>
  </Flex>
);

export { Header };
