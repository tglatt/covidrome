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

export { FieldStyle, InputStyle };
