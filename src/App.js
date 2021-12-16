import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


function App() {

  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#06285a";
      showAlert("Dark mode enabled successfully", "success");
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled successfully", "success");
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  return (
    <Router>
      <div className="container mt-2">
        <Navbar title="Text Utils" homeText="Home" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter your text in the below box to perform operations" mode={mode} showAlert={showAlert} />} />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
