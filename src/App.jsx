import { useState } from "react";

// css
import "./App.css";

// pages
import Home from "./page/home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
