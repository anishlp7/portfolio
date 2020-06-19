import React from 'react';
import {contactme, socialIcons } from './data';
import { TimelineLite } from 'gsap';

import './contact.scss';


class Contact extends React.Component{

    constructor(props){
        super(props)

        this.t1 = new TimelineLite();

        this.leftHead = null;
        this.ip1= null;
        this.ip2 = null;
        this.ip3 = null;
        this.isb = null;
        this.rightHead=null;
        this.contactme = [];
        this.cnctme = null;
        this.socialIcons = [];
    }

        componentDidMount(){
            this.t1
            .from(this.leftHead,  0.5, { scale:-15, autoAlpha:0 })
            .from(this.ip1, 0.5,{ x: -500, autoAlpha: 0 })
            .from(this.ip2, 0.5,{ x: 500, autoAlpha: 0 }, "-=0.25")
            .from(this.ip3, 0.5, { x: -500, autoAlpha: 0 }, "ip3")
            .from(this.isb, 0.5, { x: 500, autoAlpha: 0 }, "ip3+=0.25")
            .from(this.rightHead, 0.5, { scale:-15, autoAlpha:0 }, "isb+=0.25")
            .staggerFrom(this.contactme, 0.5, { scale:-15, autoAlpha:0 }, 0.3)
            .from(this.cnctme,0.5, { scale: 50, autoAlpha:0},"contactme+=0.25")
            .staggerFrom(this.socialIcons, 0.5, { scale:15, autoAlpha:0 }, 0.2)
        }


    render(){
            return (
                <div className="contact">
                <div className="col-6">
                    <div className="left">
                        <div className="letsTalk" >
                            <h1 ref={h1 => this.leftHead = h1}>Let's Talk</h1>
                        </div>
                        <div className="contct-ip">
                            <form className="formAlign">
                                    <input ref={ip1 => this.ip1 = ip1 } className="formInput" type="text"  name="Name" placeholder="Enter Your Name"/><br />
                                    <input ref={ip2 => this.ip2 = ip2 } className="formInput"  type="text" name="email" placeholder="Enter Your Email" /><br />
                                    <textarea ref={ip3 => this.ip3 = ip3 }  className="formTextarea" name="message" rows="5" cols="50" placeholder="Enter Your Message">
                                    </textarea><br />
                                    <button ref={isb => this.isb = isb } type="submit" name="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className="contct-me">
                        <div className="right">
                            <h1 ref={h1 => this.rightHead = h1}>Contact Me</h1>
                        </div>
                            <div className="cntct-details">
                                <table>
                                    {
                                        contactme.map((element, index) => {
                                            return (
                                            <tbody  key={element.id} ref={contact => this.contactme[index] = contact}>
                                            <tr>
                                                <td><img className="imgAlign" src={require(`../../assets/contact/${element.src}`)} alt={element.name} /></td>
                                                <td><p>{element.details}</p></td>
                                            </tr>
                                            </tbody>
                                            )
                                        })
                                    }


                                </table>
                        </div>
                    </div>
                </div>
                    <div className="col-12">
                        <h2 className="cnctme" ref={cntct => this.cnctme = cntct}>Connect With Me</h2>
                        <div className="sc-icn">

                                    {
                                        socialIcons.map((element, index) => {
                                            return (
                                            <a ref={scimg => this.socialIcons[index] = scimg} key={element.id} href={element.href} target="_blank" rel="noopener noreferrer">
                                                <img className="imgAlign1" src={require(`../../assets/contact/${element.src}`)} alt={element.name} />
                                            </a>
                                            )
                                        })
                                    }

                        
                            
                        
                        </div>
                    </div>
                </div>
            )
                    }
                }

export default Contact;