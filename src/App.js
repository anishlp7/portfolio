import React from 'react';
import './App.css';
import Header from './Components/Header/header';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/home';
import Skills from './Components/Skills/skills';
import Contact from './Components/Contactus/contact';
import Projects from './Components/Projects/Projects.jsx';
import Experience from "./Components/experience/experience";

class App extends React.Component{

  render(){

    return(
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />}  />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
    )
  }
}

export default App;
