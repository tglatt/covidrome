import { Header } from "./Header";
import { Footer } from "./Footer";
import { Box, Flex } from "rebass";

const Layout = ({ children }) => (
  <Flex
    sx={{
      flexDirection: "column",
      flexWrap: "wrap",
      mt: "2"
    }}
  >
    <Header />
    <Box
      sx={{
        minHeight: "100%",
        mx: "auto",
        px: 3
      }}
    >
      {children}
    </Box>
    <Footer />
  </Flex>
);

export { Layout };
