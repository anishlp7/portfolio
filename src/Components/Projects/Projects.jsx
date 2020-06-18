import React from 'react';
import { projects } from './projects'
import { TimelineLite } from 'gsap'

import './Projects.scss';

class Projects extends React.Component {

    
    constructor(props){
        super(props);

        this.projects = [];
        this.tl = new TimelineLite(); 
    }

    componentDidMount(){
        this.tl.staggerTo(this.projects, 1,{ autoAlpha: 1, y: -20 }, 0.3);
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