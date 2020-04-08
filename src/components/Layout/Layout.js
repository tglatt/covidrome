import { Fragment } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Box } from "rebass";
import { BoxWrapper } from "../../ui/Grid";

const Layout = ({ children }) => (
  <Fragment>
    <Box sx={{ position: "relative", "z-index": "1000" }} bg="cardPrimary">
      <Header />
    </Box>
    {children}
    <Box bg="cardPrimary">
      <BoxWrapper px="1">
        <Footer />
      </BoxWrapper>
    </Box>
  </Fragment>
);

export { Layout };
