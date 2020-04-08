import React from "react";
import { useField } from "formik";
import { Box } from "rebass";
import { Textarea as RebassTextarea, Label } from "@rebass/forms";

const Textarea = (props) => {
  const [field, meta] = useField({ type: "checkbox", ...props });
  const hasError = meta.touched && meta.error;

  return (
    <Box>
      <Label htmlFor={field.name}>{props.label}</Label>
      <RebassTextarea {...field} {...props} />
      {hasError && meta.error}
    </Box>
  );
};

export default Textarea;
