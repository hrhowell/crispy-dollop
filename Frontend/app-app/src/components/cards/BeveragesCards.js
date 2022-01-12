import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import './BeveragesCards.css';

/**********************************Works Cited************************************
 * Title: React Website Tutorial - Beginner React JS Project Fully Responsive
 * Author: Brian Design 
 * Date: 8/11/20 (Accessed 1/1/22)
 * Code Version: React
 * Availability: https://youtu.be/I2UBjN5ER4s
 *********************************************************************************/

function BeveragesCards() {
    return (

        <div className='cards'>
            <div id="main-re">
                <div id="bigDiv1" className="bigDivAll">
                    <a className="hov" href="/latte">
                        <div id="submain16" className="submainAll">
                            <div id="bottom">Latte</div>
                        </div>
                    </a>
                    
                    <div id="pdiv">
                    <h2 id="h2p">Express Espresso Latte</h2>
                    </div>
                </div>

                <div id="bigDiv2" className="bigDivAll">
                    <a className="hover" href="/orange-juice">
                        <div id="submain26" className="submainAll">
                            <div id="bottom">Orange Juice</div>
                        </div>
                    </a>
                    
                    <div id="pdiv">
                    <h2 id="h2p">Old-Fashioned Orange Juice</h2>
                    </div>
                </div>

                <div id="bigDiv3" className="bigDivAll">
                    <a className="hover" href="/boba-tea">
                    <div id="submain36" className="submainAll">
                        <div id="bottom">Boba Tea</div>
                    </div>
                    </a>
                    <div id="pdiv">
                    <h2 id="h2p">Bubbly Boba Tea</h2>
                    </div>
                </div>

                <div id="bigDiv4" className="bigDivAll">
                    <a className="hover" href="/punch">
                        <div id="submain46" className="submainAll">
                            <div id="bottom">Punch</div>
                        </div>
                    </a>
                    <div id="pdiv">
                    <h2 id="h2p">Summery Fruit Punch</h2>
                    </div>
                </div>

                {/* <div id="bigDiv5">
                    <a className="hover" href="/snacks">
                        <div id="submain5">
                            <div id="bottom">Snacks</div>
                        </div>
                    </a>
                    
                    <div id="pdiv">
                    <h2 id="h2p">Refresh with a pick-me-up snacks</h2>
                    </div>
                </div> */}

                {/* <div id="bigDiv6">
                    <a className="hover" href="/beverages">
                        <div id="submain6">
                            <div id="bottom">Beverage</div>
                        </div>
                    </a>
                    <div id="pdiv">
                    <h2 id="h2p">Refresh your self with some beverage</h2>
                    </div>
                </div> */}

            </div>
        </div>
        // <div className='cards'>
        //     <h1>Beverages</h1>
        //     <div className="cards__container">
        //         <div className="cards__wrapper">
        //             <ul className="cards__item">
        //                  <CardItem 
        //                 src='images/latte.jpg'
        //                 text="Express Espresso Latte"
        //                 label= "Latte"
        //                 path="/latte"
        //                 />
        //                  <CardItem 
        //                 src='images/orange_juice.jpg'
        //                 text="Old-Fashioned Orange Juice "
        //                 label= "Orange Juice"
        //                 path="/orange-juice"
        //                 />
        //                  <CardItem 
        //                 src='images/boba.jpg'
        //                 text="Bubbly Boba Tea"
        //                 label= "Boba Tea"
        //                 path="/boba"
        //                 />
        //                 <CardItem 
        //                 src='images/punch.jpg'
        //                 text="Summery Fruit Punch"
        //                 label= "Punch"
        //                 path="/punch"
        //                 />
        //             </ul>
        //         </div>
        //     </div>
        // </div>
    )
}

export default BeveragesCards;