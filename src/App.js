import "./App.css";
import React, { useRef, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Service from "./Components/Service";
import Contact from "./Components/Contact";

function App() {
  const myRef = useRef(null);
  const [theme, setTheme] = useState("Light");
  function myFunction(){
    myRef.current.classList.toggle("mystyle");
    console.log("hello");
    if(theme === "Dark"){
      setTheme("Light");
    }
    else{
      setTheme("Dark");
    }
    
  }
  return (
    <div ref = {myRef} className="App">
      <Header func={myFunction} theme={theme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </div>
  );
}

export default App;
