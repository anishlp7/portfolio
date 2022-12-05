import React from 'react';
import {contactme, socialIcons } from './data';
import { TimelineLite } from 'gsap';
import {gsap, CSSPlugin} from 'gsap/all'
import axios from 'axios';

import './contact.scss';


class Contact extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            formSubmit:false,
            sendBtn:true,
            sendPostMessage:''

        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);


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
            .from(this.ip2, 0.5,{ x: 500, autoAlpha: 0 }, "-=0.02")
            .from(this.ip3, 0.5, { x: -500, autoAlpha: 0 }, "ip3")
            .from(this.isb, 0.5, { x: 500, autoAlpha: 0 }, "ip3+=0.4")
            .from(this.rightHead, 0.5, { scale:-15, autoAlpha:0 }, "isb+=0.2")
            .staggerFrom(this.contactme, 0.5, { scale:-15, autoAlpha:0 }, 0.2)
            .from(this.cnctme,0.5, { scale: 50, autoAlpha:0},"contactme+=0.2")
            .staggerFrom(this.socialIcons, 0.5, { scale:15, autoAlpha:0 }, 0.1)

            gsap.registerPlugin(CSSPlugin)
        }

        

        handleSubmit(e) {
            e.preventDefault();

            this.setState({sendBtn:false,formSubmit:true, sendPostMessage:"Please Wait...Since using heroku free version it usually takes some time.."})
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            axios({
                method:"POST",
                url:"https://nodemailer-woad.vercel.app/",
                data: {
                    name,
                    email,
                    message
                }
            }).then((response) => {
                if(response.data.msg === 'success'){
                    this.resetForm()
                }else if(response.data.msg === 'fail'){
                    this.setState({formSubmit:true, sendBtn:true, sendPostMessage:"Message Sent Failed.Please Try Again Later."})
                }
            })

        }

    

        resetForm(){
            document.getElementById('contact-form').reset();
            this.setState({formSubmit:true, sendBtn:true,sendPostMessage:"Message Was Sent SuccessFully"})
            
        }

    render(){
        const {formSubmit, sendBtn,sendPostMessage} = this.state;
            return (
                <div className="contact">
                <div className="col-6">
                    <div className="left">
                        <div className="letsTalk" >
                            <h1 ref={h1 => this.leftHead = h1}>Let's Talk</h1>
                        </div>
                        <div className="contct-ip">
                            <form className="formAlign" onSubmit={this.handleSubmit} method="POST" id="contact-form">
                                    <input ref={ip1 => this.ip1 = ip1 } className="formInput" type="text"  id="name" name="Name" placeholder="Enter Your Name" required /><br />
                                    <input ref={ip2 => this.ip2 = ip2 }  className="formInput"  type="email" id="email" name="email" placeholder="Enter Your Email" required/><br />
                                    <textarea ref={ip3 => this.ip3 = ip3 }   className="formTextarea" name="message" id="message" rows="5" cols="50" placeholder="Enter Your Message" required>
                                    </textarea><br />

                                    {
                                        sendBtn ? 
                                        <button ref={isb => this.isb = isb } type="submit" name="submit" >Send</button>
                                        :
                                        <div className="cntct-details" >
                                           <img height="40px" src={require(`../../assets/spinner.gif`)}  alt="Loading..." />
                                        </div>
                                    }
                                    

                                    {formSubmit ? 
                                        <div className="cntct-details">
                                        <p style={{margin:"10px 0 0 0"}}>{sendPostMessage}</p>
                                        </div>
                                        :
                                       null
                                        
                                    }
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