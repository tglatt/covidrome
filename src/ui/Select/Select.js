import React from "react";
import { useField } from "formik";
import { Box } from "rebass";
import { Label, Select as RebassSelect } from "@rebass/forms";

const Select = ({ choices, ...props }) => {
  const [field, meta] = useField({ type: "select", ...props });
  const hasError = meta.touched && meta.error;

  return (
    <Box>
      <Label htmlFor={field.name}>{props.label}</Label>
      <RebassSelect {...field} {...props}>
        <option />
        {choices.map((name) => (
          <option key={name}>{name}</option>
        ))}
      </RebassSelect>
      {hasError && meta.error}
    </Box>
  );
};

export { Select };
