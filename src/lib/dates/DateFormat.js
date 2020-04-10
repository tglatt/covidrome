const formatDate = (value) => {
  const date = new Date(value);
  return date.toLocaleDateString();
};

const asDateString = (value) => {
  // Take a timestamp like 1586534805475 and return a value for a form input like "2020-04-10"
  const inputValue = new Date(value).toISOString().slice(0, 10);
  return inputValue;
};

export { asDateString, formatDate };
