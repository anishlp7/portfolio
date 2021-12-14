import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import ParticlesOpt from './Background';
import Particles from "react-tsparticles";
import './index.css';
import App from './App';

const particlesInit = (main) => {
  console.log(main);
};

const particlesLoaded = (container) => {
  console.log(container);
}

ReactDOM.render(
  <React.StrictMode>
  <Particles className="particles" init={particlesInit}
  loaded={particlesLoaded} options={ParticlesOpt} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

if(module.hot){
  module.hot.accept();
}


