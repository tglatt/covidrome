import { Fragment } from "react";
import { Header } from "./Header";
import { Box } from "rebass";

const Layout = ({ children }) => (
  <Fragment>
    <Box
      sx={{ position: "relative", "z-index": "1000" }}
      bg="cardPrimary"
      mb={1}
    >
      <Header />
    </Box>
    {children}
  </Fragment>
);

export { Layout };
