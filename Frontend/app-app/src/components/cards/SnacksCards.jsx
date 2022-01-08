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

function SnacksCard() {
    return (
        <div className='cards'>
            <h1>Recipes</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__item">

                         <CardItem 
                        src='images/celery.jpg'
                        text="Sweet and Simple Celery Boats"
                        label= "Celery Boats"
                        path="/celery-boats"
                        />
                         <CardItem 
                        src='images/hummus.jpg'
                        text="Hungry for Hummus"
                        label= "Hummus"
                        path="/hummus"
                        />
                         <CardItem 
                        src='images/fruit.jpg'
                        text="Fresh Fruit Stars"
                        label= "Fruit"
                        path="/fruit-stars"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SnacksCard;
