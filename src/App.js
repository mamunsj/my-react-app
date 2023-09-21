import { useState, useRef, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Video from "./Videos";

const App = () => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const timerIdRef = useRef(null);

  useEffect(() => {
    if (start) {
      timerIdRef.current = setTimeout(() => {
        setCount(count + 1);
      }, 1);
    }

    return () => {
      clearTimeout(timerIdRef.current);
    };
  }, [count, start]);

  const onStart = () => {
    setStart(true);
  };

  const onStop = () => {
    clearTimeout(timerIdRef.current);
    setStart(false);
  };

  return (
    <div className="app">
      <nav>
        <Link to></Link>
      </nav>
      <h1>Count: {count}</h1>
      <button onClick={onStart}>Start</button>
      <button onClick={onStop}>Stop</button>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Video />
    </div>
  );
};

export default App;
