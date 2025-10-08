import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been Enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been Enabled", "success");
    }
  };

  return (
    <>    <Router>
      <Navbar title="ClearText" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container my-3">
        <Routes>
          {/* Home Route */}
          <Route exact path="/" element={
            <TextForm showAlert={showAlert} heading="Enter your text to Analyse below"  mode={mode}  />
          } />
          {/* About Route */}
          <Route exact path="/about" element={<About mode={mode} />}  />
          {/* Optional Home alias */}
          <Route exact path="/home" element={<TextForm showAlert={showAlert} heading="Try ClearText Word Counter, Character Counter,
           Remove extra spaces" mode={mode} 
            />
          } />
        </Routes>
      </div>
    </Router>
    </>

  );
}

export default App;
