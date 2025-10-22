import React from "react";

const Button = ({ label, handleClick, btnStyle }) => {
  return (
    <button
      onClick={handleClick}
      style={{
        ...(label === "Increment"
          ? styles.buttonIncrement
          : styles.buttonDecrement),
        ...btnStyle,
      }}
    >
      {label}
    </button>
  );
};

const styles = {
  buttonIncrement: {
    backgroundColor: "#c0fc2e",
    color: "#000",
    fontSize: "1.5rem",
    fontWeight: "bold",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "1px solid #c0fc2e",
  },
  buttonDecrement: {
    backgroundColor: "#ff0201",
    color: "#fff",
    fontSize: "1.5rem",
    fontWeight: "bold",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "1px solid #ff0201",
  },
};

export default Button;
