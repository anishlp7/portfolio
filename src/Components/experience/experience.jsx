import React from "react";
import { TimelineLite } from 'gsap';
import {gsap, CSSPlugin} from 'gsap/all';
import {experience} from "./data";
import arrow from "../../assets/experience/right-arrow.svg"
import "./experience.scss";

class Experience extends React.Component{
    constructor(){
        super();

        this.experience = []
        this.tl = new TimelineLite(); 
        
    }

    componentDidMount(){
        this.tl.staggerFrom(this.experience, 0.5,{autoAlpha: 0, scale:0.5 }, 0.3);
        gsap.registerPlugin(CSSPlugin);
    }

    render(){
        return(
            <div className="experience">
           { 
               experience.map((data, index) => {
                return(
                    <div className="experience-box"  ref= { el => this.experience[index] = el }>
                    <div className="experience-main">
                    <div className="experience-logo">
                        <img className="experience-company-pic" src={require(`../../assets/experience/${data.companyLogo}`)} alt="Name of the company" />
                    </div>
                    <div className="experience-content">
                        <h2>{data.jobTitle}</h2>
                        <h4 style={{margin:"0"}}>{data.companyName}</h4>
                        <h4 style={{margin:"10px 0"}}>Description</h4>
                        {
                            data.description.map((des) => {
                                return(
                                    <div className="experience-description">
                                    <img height="20px" src={arrow}  alt="Arrow" />
                                    <p style={{margin:"0 0 0 10px"}}>{des.desc}</p>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                    <div className="experience-duration">
                            <p>From: {data.from}</p>
                            <p>To: {data.to}</p>
                    </div>
                </div>
                )
            })
        }
                
            </div>
        )
    }
}

export default Experience;