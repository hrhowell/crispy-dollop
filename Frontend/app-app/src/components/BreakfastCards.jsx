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

function BreakfastCards() {
    return (
        <div className='cards'>
            <h1>Breakfast</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__item">
                         <CardItem 
                        src='images/pancakes.jpg'
                        text=" Fluffy Buttermilk Pancakes"
                        label= "Pancakes"
                        path="/pancakes"
                        />
                         <CardItem 
                        src='images/toast.jpg'
                        text="Aboslutely Avocado Toast"
                        label= "Toast"
                        path="/toast"
                        />
                        <CardItem 
                        src='images/granola.jpg'
                        text="Wholesome Whole Food Oat Granola"
                        label= "Granola"
                        path="/granola"
                        />
                        
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BreakfastCards;
