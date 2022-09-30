import React from "react";
import { Link } from "react-router-dom";
import './header.css';
import logo from '../assets/img/home/Rectangle62.png';
import back from '../assets/img/home/lines.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()

function Header(props) {
   

    return (
        <>

            <div className="header">

                {/* <div id="wave"></div> */}

                <div id="back">
                    <img src={back} alt='' id="back1"/>
                <img src={back} alt='' id="back2"/>

                </div>
                <nav>
                    <div className="logo"><img src={logo} alt="" /></div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/channels">Channels</Link></li>
                        <li><Link to="/brands">Brands</Link></li>
                        <li><Link to="/clients">Clients</Link></li>
                        <li><Link to="/resources">Resources</Link></li>
                        {/* <li><a href="">Get in Touch</a></li> */}
                    </ul>
                    <div>
                    <button id="get-started"><span>{props.buttonText}</span></button>
                    </div>
                </nav>

                <div data-aos="fade-up"
                    data-aos-duration="2000" className="headText">{props.text1} <span>{props.text2}</span></div>
                <div className="subText">{props.subtext1}</div>

                
            </div>
        </>)
}

export default Header