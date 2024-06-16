import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./component/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="pinfo" style={{}}>
        <h1>weather app </h1>
        <p>designed by abdeslam laribi</p>
      </div>
      <Home />
    </>
  );
}

export default App;
