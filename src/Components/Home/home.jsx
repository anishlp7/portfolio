import React, {useEffect, useRef} from 'react';
import anish from '../../assets/anish.webp';
import { gsap} from 'gsap'

import './home.scss'


const Home = () => {

        let abtme = useRef(null);
        let imgme = useRef(null);

        useEffect(() => {
            gsap.from([abtme],{
                delay:0.5,
                opacity:0,
                ease:"power3.easeInOut",
                y:-150,
            
            })
        }, [abtme])

        useEffect(() => {
            gsap.from(imgme,{
                delay:0.9,
                opacity:0,
                ease:"power3.InOut",
                y:150,
                stagger: {
                    amount: 0.15
                }
            
            })
        }, [imgme])

        return(
            <div className="home" >
            <div className="abt-me" ref={el => (abtme = el)}>
                <p className="textAlign"><span className="headAlign">Hi, I'm Anish.</span><br />
                A self-taught developer having 1+ years of non-organizational experience 
                and 4 months of organizational experience in software development and also having a Master's Degree in the
                 field of Computer Science & Engineering.
                </p>
            </div>
            <div className="img-me" ref={el => (imgme = el)} >
                <img  className="img1" src={anish} alt="My Profile" />
            </div>
        </div>
        )
}

export default Home;