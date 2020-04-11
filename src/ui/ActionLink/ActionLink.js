import React from "react";
import { Box, Link } from "rebass";
import { ActionLinkStyle } from "./style";

const ActionLink = ({ handleClick, label, fontSize }) => (
  <Box ml={2}>
    <Link sx={ActionLinkStyle(fontSize)} onClick={handleClick}>
      {label}
    </Link>
  </Box>
);

export { ActionLink };
