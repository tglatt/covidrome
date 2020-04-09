const FieldStyle = (hasError) => {
  return {
    color: hasError ? "red" : "inherit",
  };
};

const SelectStyle = () => {
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

export { FieldStyle, SelectStyle, LabelStyle };
