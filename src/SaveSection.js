import React from 'react'
import image from './image2.jpg'
import './savesection.css';

export default function SaveSection(props) {
    return (
        <div className="savesection-wrapper">
            <div className="savesection-container">
            <div className="savesection-left">
                <img src={props.image}></img>
            </div>
            <div className="savesection-right">
                <h1>{props.heading}</h1>
                <p className="savesection-subheading">now all your international and <br/>domestic shipments for free to your<br/>doorstep!</p>
                <p className="savesection-para">{props.para}</p>
                    <a>for more details</a>
            </div>
            </div>
        </div>
    )
}
