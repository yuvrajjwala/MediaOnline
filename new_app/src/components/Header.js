import React from "react";
import './header.css' ;
import logo from '../assets/img/home/Rectangle62.png';
import back from '../assets/img/home/Lines.png'


function Header(props){
    return(
    <>
        <div className="header">
            <div id="back">
                <img src={back} alt='' id="back1"/>
                <img src={back} alt='' id="back2"/>
            </div>
            <nav>
                <div className="logo"><img src={logo} alt=""/></div>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Channels</a></li>
                    <li><a href="">Brands</a></li>
                    <li><a href="">Clients</a></li>
                    <li><a href="">Resources</a></li>
                    <li><a href="">Get in Touch</a></li>
                </ul>

            </nav>

            <div className="headText">{props.text1} <span>{props.text2}</span></div>
            <div className="subText">{props.subtext1}</div>

            <button><span>{props.buttonText}</span></button>
        </div>
    </>)
}

export default Header