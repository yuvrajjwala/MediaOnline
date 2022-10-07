import React from "react";
import { Link } from "react-router-dom";
import './header.css';
import logo from '../assets/img/home/Rectangle62.png';
import back from '../assets/img/home/lines.png'
import menu from '../assets/img/home/menu.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()

function Header(props) {
    function opencontainer() {
        document.getElementById("mob-menu-container").style.width = "100vw";
    }
    function closecontainer() {
        document.getElementById("mob-menu-container").style.width = "0vw";
    }


    return (
        <>

            <div className="header">

                {/* <div id="wave"></div> */}

                <div id="back">
                    <img src={back} alt='' id="back1" />
                    <img src={back} alt='' id="back2" />

                </div>
                <nav>
                    <div className="logo"><img src={logo} alt="" /></div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/channels">Channels</Link></li>
                        <li><Link to="/brands">Brands</Link></li>
                        <li><Link to="/influencers">Influncers</Link></li>
                        <li><Link to="/clients">Clients</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Get in touch</Link></li>
                        {/* <li><Link to="/resources">Resources</Link></li> */}
                        {/* <li><a href="">Get in Touch</a></li> */}
                    </ul>
                    <div>
                        <button id="get-started"><span>{props.buttonText}</span></button>
                        <div onClick={opencontainer} id="header-ham-menu"><img src={menu} alt="≣"></img></div>
                    </div>
                    <div id="mob-menu-container">
                        <div className="mob-cont-top">
                            <img src={logo}></img>
                            <div onClick={closecontainer} className="X">X</div>
                        </div>
                        <div className="list-mob-cont">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/channels">Channels</Link></li>
                                <li><Link to="/brands">Brands</Link></li>
                                <li><Link to="/influencers">Influncers</Link></li>
                                <li><Link to="/clients">Clients</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Get in Touch</Link></li>
                            </ul>
                            <div>
                                <button id="get-started1"><span>GET STARTED</span></button>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="headText">{props.text1} <span>{props.text2}</span></div>
                <div className="subText">{props.subtext1}</div>


            </div>
        </>)
}

export default Header