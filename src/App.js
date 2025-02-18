
import './App.css';
import Navbar from './components/A';
import TextArea from './components/TextArea';
import React, { useState } from 'react'
import Alert from "./components/Alert"
import About from './components/About';


import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom';






function App() {


  const [Mode, setMode] = useState("light");
  
  
  const [alert, setAlert] = useState(null);
  const showAlert =(message , type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
      
    }, 1500);


  }
  
  
  const toggleMode = ()=>{
    if (Mode==="dark"){
      setMode("light")
      document.body.style.background ="white"
      showAlert( "Light Mode is Applied Succesfully!!!" , "Success");

    }
    else if (Mode==="light"){
      setMode("dark")
      document.body.style.background ="#012e4b";
      showAlert( "Dark Mode is Applied Succesfully!!!" , "Success");

    }

   

  }

  return(

    <>
  <Router>
    <Navbar Mode = {Mode}  toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className = "container my-5" >

      <Switch>
        <Route exact path='/About'>
        <About/>
        </Route>
        

        <Route path='/'>

        <TextArea showAlert={showAlert} Mode = {Mode} />
  
        
        </Route>
      </Switch>

    
      </div>
  </Router>
    </>
  )
    
  
  
}

export default App;
