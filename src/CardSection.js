import React from 'react';
import Card from './Card'
import './cardsection.css';

export default function Cards() {
    return (
        <div className="cardsection-wrapper">
            <div className="cardsection-container">
            <div>
            <Card heading="Servies Guide" para="Service Directory - Subul Online"/>
            </div>
            <div>
            <Card heading="Pay bills"
                  para="Do you have an outstanding invoice? You can easily pay all your postal bills online"/>
            </div>
            <div>
            <Card  heading="Price Calculator"
                   para="Do you have an outstanding invoice? You can easily pay all your postal bills online"
                 />
            </div>
            <div>
            <Card heading="National address"
                  para="Do you have an outstanding invoice? You can easily pay all your postal bills online"/>
            </div>
            </div>
        </div>
    )
}
