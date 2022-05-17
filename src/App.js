import "./App.css";
import { useState } from "react";
import { Form } from "./components/forms/Form";
import { Container } from "./components/tableContainer/Container";

const App = () => {
  // const [count, setCount] = useState(0);

  return (
    <div className="">
      <h1>Counter App with out redux</h1>
      <Container />
      <Form />
    </div>
  );
};

export default App;
