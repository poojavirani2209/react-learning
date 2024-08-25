import "./App.css";
import { ButtonComponent } from "./components/ButtonComponent";
import { useState } from "react";

function App() {
  function onReset() {
    setCounterValue(0);
    setValue("")
  }

  function onValueChange(operation, value) {
    console.log(operation);
    console.log(value);
    if(operation == 'increment'){
      setCounterValue(parseInt(counterValue)+parseInt(value))
    }else{
      setCounterValue(parseInt(counterValue)-parseInt(value));
    }
  }

  let [counterValue, setCounterValue] = useState(0);
  let [operation, setOperation] = useState("");
  let [value, setValue] = useState("");

  return (
    <div className="App">
      <ButtonComponent
        onClick={() => {
          setOperation("increment");
        }}
      >
        increment
      </ButtonComponent>
      <ButtonComponent
        onClick={() => {
          setOperation("decrement");
        }}
      >
        decrement
      </ButtonComponent>
      <input
        onChange={(event) => {
          setValue(event.target.value);
        }}
      ></input>
      <ButtonComponent
        onClick={() => {
          onValueChange(operation, value);
        }}
      >
        Submit
      </ButtonComponent>
      <div>{counterValue}</div>
      <ButtonComponent onClick={onReset}>Reset</ButtonComponent>
    </div>
  );
}

export default App;
