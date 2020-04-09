const FieldStyle = (hasError) => {
  return {
    color: hasError ? "red" : "inherit",
  };
};

const InputStyle = () => {
  return {
    p: "8px",
  };
};

const LabelStyle = () => {
  return {
    fontSize: "1",
    color: "textSecondary",
  };
};

export { FieldStyle, InputStyle, LabelStyle };
