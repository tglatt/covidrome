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

export { FieldStyle, SelectStyle };
