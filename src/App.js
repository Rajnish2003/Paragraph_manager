import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import React,{useState} from 'react';
import Alert from './components/Alert';
// import About from './components/About';
function App() {
  const [mode, setMode] = useState('light')  //whether darkmode enqable or not
  const [alert, setalert] = useState(null);
  const showalert= (message,type) => { 
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#010118';
    showalert("Dark mode has been enabled","success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showalert("Light mode has been enabled","success");
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar/> */}
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm showalert={showalert} heading='Enter the text to analyze' mode={mode}/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
