
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";




import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const redModeToggle = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#963937';
      showAlert("Dark Mode has been Enabled", "danger");

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "danger");
    }
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#02507f';
      showAlert("Dark Mode has been Enabled", "success");
      document.title = "Textutils - Darkmode"
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "success");
      document.title = "Textutils - Lightmode"

    }

  }
  return (
    <>
      <Router>
        <Navbar title="TECHREF" abouttitle="Abous_Techref" mode={mode} toggleMode={toggleMode} redModeToggle={redModeToggle} />
        <Alert alert={alert} />

        <div className='container'>
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />


            <Route exact path="/" element={ <Textform showAlert={showAlert} heading="Enter Yhe Text to Analyze Below" mode={mode} />}/>
             
          </Routes>

        </div>
      </Router>




    </>

  );
}

export default App;
