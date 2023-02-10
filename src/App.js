import Tiptap from "./Tiptap.jsx";
import './App.css';
import { useState } from "react";

const App = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>toggle</button>
      {show && <Tiptap />}
    </div>
  );
};

export default App;
