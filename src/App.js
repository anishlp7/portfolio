import React from 'react';
import './App.css';
import Header from './Components/Header/header';
import { Switch, Route } from 'react-router-dom';
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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects}  />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
          <Route path="/experience" component={Experience} />
        </Switch>
      </div>
    )
  }
}

export default App;
