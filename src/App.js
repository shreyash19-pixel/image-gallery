import Home from "./pages/Home";
import AppContext from "./utils/AppContext";
import { useState } from "react";

function App() {

  const imageInfo = JSON.parse(localStorage.getItem("info")) || []
  const [section, setSection] = useState('upload')
  const [info, setInfo] = useState(imageInfo)

  const value = {
    section,
    setSection,
    info,
    setInfo
  }

  return (
      <AppContext.Provider value = {value}>
        <Home />
      </AppContext.Provider>
  );
}

export default App;
