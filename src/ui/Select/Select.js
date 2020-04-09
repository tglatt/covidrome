import React from "react";
import { useField } from "formik";
import { Box } from "rebass";
import { Label, Select as RebassSelect } from "@rebass/forms";
import { SelectStyle, LabelStyle } from "./style";

const Select = ({ choices, ...props }) => {
  const [field, meta] = useField({ type: "select", ...props });
  const hasError = meta.touched && meta.error;

  return (
    <Box mb={2}>
      <Label htmlFor={field.name} sx={LabelStyle}>
        {props.label}
      </Label>
      <RebassSelect {...field} {...props} sx={SelectStyle}>
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
