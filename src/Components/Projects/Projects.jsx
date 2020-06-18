import React from 'react';
import { projects } from './projects'

import './Projects.scss';

class Projects extends React.Component {

    render() {

    return(
        <div className="Project">
        {
            projects.map((element, index) => (
                <img className="imgAlign" key={element.id} src={require(`../../assets/projects/${element.src}`)} 
                alt={element.name}
                
                />
                    )) 
        }
        </div>
    )
        }
    }

export default Projects;