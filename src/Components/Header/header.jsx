import React from 'react';
import { Link } from 'react-router-dom';
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
                    <h5>Font Awesoem</h5>
            </div>

        </div>
)
}
}
export default Header;