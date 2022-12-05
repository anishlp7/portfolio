import React from 'react';
import { NavLink } from 'react-router-dom';
import more from '../../assets/more.png';
import close from '../../assets/close.png';
import resume from '../../assets/resume.pdf';
import './header.scss';

class Header extends React.Component {
    constructor(props){
        super(props);
            this.state = {
                isModalOpen: false,
                height:'8vh'
        }
    }
    render(){
        return (
    <>
        <div className="Header"  style={{height: this.state.height}}>
            <div className="left">
                <NavLink to="/" className="leftNav">Anish L</NavLink>
            </div>
            <div className="mainNav">
                <NavLink exact to="/" className="option" activeStyle={{fontWeight:"bold", color:"yellow"}}>Home</NavLink>
                <NavLink to="/projects" className="option"  activeStyle={{fontWeight:"bold", color:"yellow"}}>Projects</NavLink>
                <NavLink to="/skills" className="option" activeStyle={{fontWeight:"bold", color:"yellow"}}>Skills</NavLink>
                <NavLink to="/experience" className="option" activeStyle={{fontWeight:"bold", color:"yellow"}}>Work Experience</NavLink>
                <NavLink to="/contact" className="option"  activeStyle={{fontWeight:"bold", color:"yellow"}}>Contact Me</NavLink>
            </div>
           <a className="resume" href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
           <button className='hamburger-mobile' onClick={() => this.setState({isModalOpen: true, height: '100vh'})}>
            <img className='ham-btn' src={more}  alt="Icon" height={20} />
           </button>

          {this.state.isModalOpen && ( 
          <div className='header-mobile'>
            <div className=''>
                <button className='close-mobile' onClick={() => this.setState({isModalOpen: false, height: '8vh'})}>
                    <img className='ham-btn' src={close}  alt="Icon" height={20} />
                </button>
                <ul>
                    <li><NavLink exact to="/" className="option" activeStyle={{fontWeight:"bold", color:"yellow"}} onClick={() => this.setState({isModalOpen: false, height: '8vh'})}>Home</NavLink></li>
                    <li><NavLink to="/projects" className="option"  activeStyle={{fontWeight:"bold", color:"yellow"}} onClick={() => this.setState({isModalOpen: false, height: '8vh'})}>Projects</NavLink></li>
                    <li><NavLink to="/skills" className="option" activeStyle={{fontWeight:"bold", color:"yellow"}} onClick={() => this.setState({isModalOpen: false, height: '8vh'})}>Skills</NavLink></li>
                    <li><NavLink to="/experience" className="option" activeStyle={{fontWeight:"bold", color:"yellow"}} onClick={() => this.setState({isModalOpen: false, height: '8vh'})}>Work Experience</NavLink></li>
                    <li><NavLink to="/contact" className="option"  activeStyle={{fontWeight:"bold", color:"yellow"}} onClick={() => this.setState({isModalOpen: false, height: '8vh'})}>Contact Me</NavLink></li>
                </ul>
            </div>
                <a className="mbl-resume" href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
           </div>)}
        </div>
        

    </>
)}
}
export default Header;