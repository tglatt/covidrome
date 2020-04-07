const LinkButtonStyle = (isActive, disabled) => {
  return {
    "&:active": {
      color: "white",
      opacity: "0.6"
    },
    "&:hover": {
      color: "white",
      opacity: "0.8",
      textDecoration: "none"
    },
    bg: "primary",
    borderRadius: "default",
    color: "white !important",
    cursor: "pointer",
    display: "inline-block",
    fontSize: 1,
    fontWeight: 500,
    lineHeight: "1.2",
    opacity: isActive ? (disabled ? 0.3 : 0.6) : 1,
    outline: "none",
    px: 3,
    py: 2,
    transition: "150ms ease-in-out opacity"
  };
};

export { LinkButtonStyle };
