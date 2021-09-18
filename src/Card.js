import React from 'react';
import './card.css';
import {FiUserPlus} from "react-icons/fi";
import {IconContext} from "react-icons";
export default function Carts(props) {
    return (
        <IconContext.Provider value={{ style: {fontSize: '40px', marginTop:"50px", color: "rgb(0, 123, 255)"}}}>
            <div className="wrapper">
            <div className="card-container">
                <div className="user-logo">
                    <FiUserPlus/>
                </div>
                <div>
                    <p className="user-heading">
                        {props.heading}
                    </p>
                </div>
                <div>
                    <p className="user-para">
                        {props.para}
                    </p>
                </div>
            </div>
        </div>
        </IconContext.Provider>
    )
}
