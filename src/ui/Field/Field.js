import React from "react";
import { FieldStyle, InputStyle } from "./style";
import { useField } from "formik";
import { Box } from "rebass";
import { Label, Input } from "@rebass/forms";

const Field = (props) => {
  const [field, meta] = useField(props);
  const hasError = meta.touched && meta.error;

  return (
    <Box mb={3} sx={FieldStyle(hasError)}>
      <Label htmlFor={field.name}>{props.label}</Label>
      <Input {...field} {...props} sx={InputStyle} />
      {hasError && meta.error}
    </Box>
  );
};

export { Field };
