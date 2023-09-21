import { useState, useRef } from "react";

const App = () => {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  const plus = (e) => {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };
  const minus = (e) => {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };

  const divided = (e) => {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };

  const multiply = (e) => {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };

  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = 0;
  };

  const resetValue = (e) => {
    e.preventDefault();
    setResult((preVal) => preVal * 0);
    inputRef.current.value = 0;
  };

  return (
    <div className="app">
      <div>
        <h1>Simple Calculator App</h1>
      </div>
      <form>
        <p ref={resultRef}> Your result is : {result}</p>
        <input
          type="number"
          pattern="[0-9]"
          placeholder="Write a number"
          ref={inputRef}
        />
        <div className="btns">
          <button onClick={plus}>Plus</button>
          <button onClick={minus}>Minus</button>
          <button onClick={divided}>Divided</button>
          <button onClick={multiply}>Multiply</button>
          <button onClick={resetInput}>Reset Input</button>
          <button onClick={resetValue}>Reset Value</button>
        </div>
      </form>
    </div>
  );
};

export default App;
