import React from 'react';
import './App.css';
import Header from './Components/Header/header';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/home';
import Skills from './Components/Skills/skills';
import Contact from './Components/Contactus/contact';
import Projects from './Components/Projects/Projects.jsx';

class App extends React.Component{

  render(){

    return(
      <div className="App">
        <Header changeColor={this.changeColor}/>
        <Switch>
          <Route exact path="/portfolio/" component={Home} />
          <Route path="/portfolio/projects" component={Projects}  />
          <Route path="/portfolio/skills" component={Skills} />
          <Route path="/portfolio/contact" component={Contact} />
        </Switch>
      </div>
    )
  }
}

export default App;
