import React from 'react';
import { NavLink } from 'react-router-dom';
import resume from '../../assets/resume.pdf';
import './header.scss';

class Header extends React.Component {

   

    render(){
        return (
        <div className="Header"  >
            <div className="left ">
                <NavLink to="/portfolio/" className="leftNav">Anish L</NavLink>
            </div>
            <div className="mainNav">
                <NavLink exact to="/portfolio/" className="option" activeStyle={{fontWeight:"bold", color:"yellow"}}>Home</NavLink>
                <NavLink to="/skills" className="option" activeStyle={{fontWeight:"bold", color:"yellow"}}>Skills</NavLink>
                <NavLink to="/projects" className="option"  activeStyle={{fontWeight:"bold", color:"yellow"}}>Projects</NavLink>
                <NavLink to="/contact" className="option"  activeStyle={{fontWeight:"bold", color:"yellow"}}>Contact Me</NavLink>
            </div>
           <a className="resume" href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
)
}
}
export default Header;