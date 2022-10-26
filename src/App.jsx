import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import "./components/css/App.css";

function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  let loadStyle = {
    display: loaded ? "none" : "flex",
  };

  return (
    <div className="App">
      <div id="loading-div" style={loadStyle}>
        <h1 class="loading-div-text">Loading</h1>
      </div>
      <Navbar/>
      <Content/>
    </div>
  );
}

export default App;
