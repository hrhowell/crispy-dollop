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

function Card() {
    return (
        <div className='cards'>
            <div id="main-re">

            <div id="bigDiv1" className="bigDivAll">
                    <a className="hov" href="/breakfast">
                        <div id="submain1" className="submainAll">
                            <div id="bottom">Breakfast</div>
                        </div>
                    </a>
                    
                    <div id="pdiv">
                    <h2 id="h2p">Start your day with a healthy breakfast</h2>
                    </div>
                </div>


                <div id="bigDiv2" className="bigDivAll">

                    <a className="hover" href="/lunch">
                        <div id="submain2" className="submainAll">
                            <div id="bottom">Lunch</div>
                        </div>
                    </a>
                    
                    <div id="pdiv">
                    <h2 id="h2p">Power through with a delicious lunch</h2>
                    </div>
                </div>

                <div id="bigDiv3" className="bigDivAll">
                    <a className="hover" href="/dinner">
                    <div id="submain3" className="submainAll">
                        <div id="bottom">Dinner</div>
                    </div>
                    </a>
                    <div id="pdiv">
                    <h2 id="h2p">Beat the clock with a speedy dinner</h2>
                    </div>
                </div>

                <div id="bigDiv4" className="bigDivAll">
                    <a className="hover" href="/desserts">
                        <div id="submain4" className="submainAll">
                            <div id="bottom">Desserts</div>
                        </div>
                    </a>
                    <div id="pdiv">
                    <h2 id="h2p">Indulge your sweet tooth<br/>with yummy desserts</h2>
                    </div>
                </div>

                <div id="bigDiv5" className="bigDivAll">
                    <a className="hover" href="/snacks">
                        <div id="submain5" className="submainAll">
                            <div id="bottom">Snacks</div>
                        </div>
                    </a>
                    
                    <div id="pdiv">
                    <h2 id="h2p">Refresh with a pick-me-up snack</h2>
                    </div>
                </div>

                <div id="bigDiv6" className="bigDivAll">
                    <a className="hover" href="/beverages">
                        <div id="submain6" className="submainAll">
                            <div id="bottom">Beverage</div>
                        </div>
                    </a>
                    <div id="pdiv">
                    <h2 id="h2p">Refresh yourself with some beverage</h2>
                    </div>
                </div>
            </div>          
        </div>
    )
}

export default Card
