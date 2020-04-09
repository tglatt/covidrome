const formatDate = value => {
  const date = new Date(value);
  return date.toLocaleDateString();
};

export { formatDate };
