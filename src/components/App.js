import { useState } from "react";
import "../styles/App.css";
import Button from "./button/Button";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1>Hello React</h1>
      <p>Count: {count}</p>
      <div style={styles.buttonContainer}>
        <Button label="Increment" handleClick={handleIncrement} />
        <Button
          label="Decrement"
          handleClick={handleDecrement}
          btnStyle={styles.buttonDecrement}
        />
        <Button
          label="Reset"
          handleClick={handleReset}
          btnStyle={styles.buttonReset}
        />
      </div>
    </div>
  );
}

const styles = {
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  buttonReset: {
    backgroundColor: "#f39c12",
    color: "#fff",
    fontSize: "1.5rem",
    fontWeight: "bold",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "1px solid #f39c12",
  },
};

export default App;
