import React from 'react'
import './landingpage.css'
import image from './homebanner-ar.jpg'

export default function LandingPage() {
    return (
        <div className="wrapper">
            <div className="container">
            <div className="container-left">
                <img src={image} className="img-fluid"></img>
            </div>
            <div className="container-right">
                <h1>Your way to the<br/>World</h1>
                <p>Welcome to the saudi post</p>
            </div>
            </div>
             <div className="design">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="110.53900146484375" viewBox="0 0 1922.745 110.539" class="hero_linear" preserveAspectRatio="xMidYMid slice">
                <g id="lines" transform="translate(240.981 6.003)">
                    <g id="Group_5" data-name="Group 5" transform="translate(0.001)">
                        <path id="Stroke_1" data-name="Stroke 1" d="M481.449,31H40.442c-9.228,0-12.731-3.427-17.011-7.614,0,0-2.6-2.54-6.83-6.776L0,0" transform="translate(1199.524 22.804)" fill="none" stroke="#153c3f" stroke-miterlimit="10" stroke-width="12" class="svg-hero-1"></path>
                        <path id="Stroke_5" data-name="Stroke 5" d="M1199.525,22.8,1179.014,2.286a9.393,9.393,0,0,0-13.2.888L1114.988,54c-4.235,4.236-12.6,7.7-18.588,7.7L16.047,61.5H-240.981" transform="translate(-0.001 0)" fill="none" stroke="#153c3f" stroke-miterlimit="10" stroke-width="12" class="svg-hero-2"></path>
                    </g>
                    <path id="Stroke_3" data-name="Stroke 3" d="M1681.764,0H1245.2c-5.2,0-7.724,1.33-10.369,3.975L1162.864,74,1105.8,27.31l-1346.711-.455" transform="translate(0 22.5)" fill="none" stroke="#00c8e1" stroke-miterlimit="10" stroke-width="12" class="svg-hero-3"></path>
                </g>
            </svg>
            <div className="warning">

            </div>
            </div>
        </div>
    )
}
