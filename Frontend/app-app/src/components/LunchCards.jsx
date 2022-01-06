    import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

/**********************************Works Cited************************************
 * Title: React Website Tutorial - Beginner React JS Project Fully Responsive
 * Author: Brian Design 
 * Date: 8/11/20 (Accessed 1/1/22)
 * Code Version: React
 * Availability: https://youtu.be/I2UBjN5ER4s
 * 
 * Title: "3 Ways to Enjoy Katsu, the Delicious Japanese Fried Food"
 * Author: NA
 * Date Accessed: 1/6/21
 * Availability: https://jpninfo.com/98417
 *********************************************************************************/

function LunchCards() {
    return (
        <div className='cards'>
            <h1>Lunch</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__item">
                         <CardItem 
                        src='images/bento.jpg'
                        text=" Katsu Pork Bento Box"
                        label= "Bento"
                        path="/bento"
                        />
                         <CardItem 
                        src='images/salad.jpg'
                        text=" Grilled  Salad Chicken with Raspberry Vinegrette "
                        label= "Salad"
                        path="/salad"
                        />
                         <CardItem 
                        src='images/katsu.jpg'
                        text="Katsu Pork Bento Box"
                        label= "Bento"
                        path="/bento"
                        />
                        <CardItem 
                        src='images/curry.jpg'
                        text="Yellow Curry"
                        label= "Curry"
                        path="/curry"
                        />
                        
                       
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LunchCards;
