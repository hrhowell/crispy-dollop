import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

/**********************************Works Cited************************************
 * Title: React Website Tutorial - Beginner React JS Project Fully Responsive
 * Author: Brian Design 
 * Date: 8/11/20 (Accessed 1/1/22)
 * Code Version: React
 * Availability: https://youtu.be/I2UBjN5ER4s
 *********************************************************************************/

function DinnerCards() {
    return (
        <div className='cards'>
            <h1>Dinner</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__item">
                         <CardItem 
                        src='images/hamburger.jpg'
                        text="Very Gouda Hamburger"
                        label= "Hamburger"
                        path="/hamburger"
                        />
                         <CardItem 
                        src='images/pasta.jpg'
                        text="Quick and Sophisticated Clam Linguine "
                        label= "Pasta"
                        path="/pasta"
                        />
                         <CardItem 
                        src='images/pad_thai.jpg'
                        text="Pad Thai"
                        label= "Pad Thai"
                        path="/pad thai"
                        />
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}

export default DinnerCards;
