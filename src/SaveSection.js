import React from 'react'
import image from './image2.jpg'
import './savesection.css';

export default function SaveSection() {
    return (
        <div className="savesection-wrapper">
            <div className="savesection-container">
            <div className="savesection-left">
                <img src={image}></img>
            </div>
            <div className="savesection-right">
                <h1>Save</h1>
                <p>now all your international and <br/>domestic shipments for free to your<br/>doorstep!</p>
            </div>
            </div>
        </div>
    )
}
