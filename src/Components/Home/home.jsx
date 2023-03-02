import React from 'react';
import anish from '../../assets/anish.webp';
import { gsap, TimelineLite } from 'gsap'
import { CSSPlugin } from 'gsap/all'

import './home.scss'



class Home extends React.Component {

    constructor(props){
        super(props);

        this.tl = new TimelineLite(); 

        this.abtme = null;
        this.imgme = null;
        
    }

    componentDidMount(){
        this.tl
        .from(this.abtme, 0.5,{ x: -500,y:-150, autoAlpha: 0 })
        .from(this.imgme,0.5,{ y: 500, autoAlpha: 0 })

        gsap.registerPlugin(CSSPlugin);
    }


        render(){
        return(
            <div className="home" >
            <div className="abt-me" ref={el => this.abtme = el}>
                <p className="textAlign"><span className="headAlign">Hi, I'm Anish.</span><br />
                A self-taught developer with 5+ years of organizational and non-organizational experience in software development.I've also acquired a Master's Degree in the
                 field of Computer Science & Engineering.
                </p>
            </div>
            <div className="img-me" ref={el => this.imgme = el} >
                <img  className="img1" src={anish} alt="My Profile" />
            </div>
        </div>
        )
}
}

export default Home;