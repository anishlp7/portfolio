import React from 'react';
import { Link } from 'react-router-dom';
import resume from '../../assets/resume.pdf';
import './header.scss';

class Header extends React.Component {

   

    render(){
        return (
        <div className="Header"  >
            <div className="left ">
                <Link to="/" className="leftNav">Anish L</Link>
            </div>
            <div className="mainNav">
                <Link to="/" className="option">Home</Link>
                <Link to="/skills" className="option">Skills</Link>
                <Link to="/projects" className="option">Projects</Link>
                <Link to="/contact" className="option">Contact Me</Link>
            </div>
            <div className="navIcon">
                    <a className="resume" href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
            </div>

        </div>
)
}
}
export default Header;