import React from "react";
import { useField } from "formik";
import { Box } from "rebass";
import { Checkbox, Label } from "@rebass/forms";

const CheckBoxField = (props) => {
  const [field, meta] = useField({ type: "checkbox", ...props });

  return (
    <Box>
      <Label>
        <Checkbox {...field} {...props} />
        {props.label}
      </Label>
    </Box>
  );
};

export { CheckBoxField };
