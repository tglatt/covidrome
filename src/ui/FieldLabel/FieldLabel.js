import React from "react";
import { Text } from "rebass";

const FieldLabel = ({ label }) => {
  return (
    <Text sx={{ fontSize: "1" }} color="textSecondary">
      {label}
    </Text>
  );
};

export { FieldLabel };
