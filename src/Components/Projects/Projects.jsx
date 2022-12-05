import React from 'react';
import { projects } from './data';
import { gsap,TimelineLite } from 'gsap';
import { CSSPlugin } from 'gsap/all'

import './Projects.scss';

class Projects extends React.Component {

    
    constructor(props){
        super(props);

        this.projects = [];
        this.tl = new TimelineLite(); 
    }

    componentDidMount(){
        this.tl.staggerFrom(this.projects, 0.5,{ scale:2, autoAlpha:0 }, 0.3);

        gsap.registerPlugin(CSSPlugin)
    }

    render() {

    return(
        <div className="Project">
        {
            projects.map((element, index) => (
                <div className="mapAlign" key={element.id}>
                <a href={element.href} target="_blank" rel="noopener noreferrer">
                        <img className="imgAlign" src={require(`../../assets/projects/${element.src}`)} 
                        alt={element.name}
                        ref= { el => this.projects[index] = el }
                        />
                </a>
                </div>
                    )) 
        }
        </div>
    )
        }
    }

export default Projects;