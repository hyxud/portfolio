import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import "./components/css/App.css";

function App() {
  const [, setLoaded] = useState(false);
  const [loadingVisible, setLoadingVisible] = useState(true)
  const loadingDiv = useRef(null)
  var loadStyles = {
    display: loadingVisible ? 'flex' : 'none'
  }
  const onPageLoad = () => {
    setLoaded(true);
    loadingDiv.current.classList.add("load-anim")
    setTimeout(()=>{
      setLoadingVisible(false)
    }, 1000)
  }

  useEffect(() => {
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  return (
    <div className="App">
      <div id="loading-div" ref={loadingDiv} style={loadStyles}>
        <h1 class="loading-div-text">Loading</h1>
      </div>
      <Navbar/>
      <Content/>
    </div>
  );
}

export default App;
