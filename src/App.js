import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar title="TextUtils" />
      <div className="container mt-4">
        {/* <TextForm heading="Enter the text to analiyzed" /> */}
        <About/>
      </div>
    </>
  );
}

export default App;
