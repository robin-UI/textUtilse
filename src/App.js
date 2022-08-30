import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)
  
  const showAlert = (message, type) => {
    setAlert({
      msg : message,
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
    }else{
      setMode("light")
      document.body.style.backgroundColor = "#FFFFFF"
      showAlert("Light mode has been enabled", "success")
      document.title = "TextUtils - LightMode"
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container mt-4">
        <TextForm heading="Enter the text to analiyzed" mode={mode} showAlert={showAlert}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
