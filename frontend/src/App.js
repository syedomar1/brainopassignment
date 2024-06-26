import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import {useState} from 'react'


function App() {
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type});
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <>
        <Router>
          <Navbar title="BrainOp" aboutText="About" />
          <Alert alert={alert}/>
          <div className="container" style={{backgroundColor: "lightblue",minHeight:"50vh"}}>
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert}/>} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
              <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} />
            </Routes>
          </div>
        </Router>
    </>
  );
}

export default App;
