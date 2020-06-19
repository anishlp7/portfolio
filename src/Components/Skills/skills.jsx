import React from 'react';
import { TimelineLite } from 'gsap'

import {DataArray} from './data';
import './skills.scss'


class Skills extends React.Component {


    constructor(props){
        super(props);

        this.cards = [];
        this.tl = new TimelineLite(); 
    }

    componentDidMount(){
        this.tl.staggerFrom(this.cards, 0.5,{autoAlpha: 0, scale:-2 }, 0.3);
    }
render(){
        return(
            <div className="skills">
                {
                DataArray.map((element, index) => (
                    <img className="imgAlign" key={element.id} src={require(`../../assets/skills/${element.src}`)} 
                    alt={element.name}
                    ref= { el => this.cards[index] = el }
                    />
        )) 
                }
            </div>
        )}
    }
export default Skills;