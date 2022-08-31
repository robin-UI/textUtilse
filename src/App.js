import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as   Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#0A1931";
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtils - DarkMode"
    } else {
      setMode("light")
      document.body.style.backgroundColor = "#FFFFFF"
      showAlert("Light mode has been enabled", "success")
      document.title = "TextUtils - LightMode"
    }
  }
  return (
    <>
      {/* <BrowserRouter>
        <Router>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />

          <div className="container mt-4">

            <Route path='/' element={<TextForm heading="Enter the text to analiyzed" mode={mode} showAlert={showAlert} />} />

            <Route path="/" element={<About />} />

          </div>

        </Router>
      </BrowserRouter> */}


          
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
        <div className="container mt-4">
        <Routes>
            <Route path="/" element={<TextForm heading="Enter the text to analiyzed" mode={mode} showAlert={showAlert} />}></Route>
            <Route path="/About" element={<About mode={mode} />}  />
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
