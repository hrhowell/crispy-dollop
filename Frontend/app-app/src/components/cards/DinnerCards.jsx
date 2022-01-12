import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import './DinnerCards.css';

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
            <div id="main-re">
                <div id="bigDiv1" className="bigDivAll">
                    <a className="hov" href="/hamburger">
                        <div id="submain13" className="submainAll">
                            <div id="bottom">Hamburger</div>
                        </div>
                    </a>
                    
                    <div id="pdiv">
                    <h2 id="h2p">Very Gouda Hamburger</h2>
                    </div>
                </div>


                <div id="bigDiv2" className="bigDivAll">

                    <a className="hover" href="/pasta">
                        <div id="submain23" className="submainAll">
                            <div id="bottom">Pasta</div>
                        </div>
                    </a>
                    
                    <div id="pdiv">
                    <h2 id="h2p">Quick and Sophisticated Clam Linguine</h2>
                    </div>
                </div>

                <div id="bigDiv3" className="bigDivAll">
                    <a className="hover" href="/padthai">
                    <div id="submain33" className="submainAll">
                        <div id="bottom">Pad Thai</div>
                    </div>
                    </a>
                    <div id="pdiv">
                    <h2 id="h2p">Presto Pad Thai</h2>
                    </div>
                </div>

                {/* <div id="bigDiv4">
                    <a className="hover" href="/desserts">
                        <div id="submain43">
                            <div id="bottom">Desserts</div>
                        </div>
                    </a>
                    <div id="pdiv">
                    <h2 id="h2p">Indulge your sweet tooth with yummy desserts</h2>
                    </div>
                </div> */}

                {/* <div id="bigDiv5">
                    <a className="hover" href="/snacks">
                        <div id="submain53">
                            <div id="bottom">Snacks</div>
                        </div>
                    </a>
                    
                    <div id="pdiv">
                    <h2 id="h2p">Refresh with a pick-me-up snacks</h2>
                    </div>
                </div> */}

                {/* <div id="bigDiv6">
                    <a className="hover" href="/beverages">
                        <div id="submain63">
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
        //     <h1>Dinner</h1>
        //     <div className="cards__container">
        //         <div className="cards__wrapper">
        //             <ul className="cards__item">
        //                  <CardItem 
        //                 src='images/hamburger.jpg'
        //                 text="Very Gouda Hamburger"
        //                 label= "Hamburger"
        //                 path="/hamburger"
        //                 />
        //                  <CardItem 
        //                 src='images/pasta.jpg'
        //                 text="Quick and Sophisticated Clam Linguine "
        //                 label= "Pasta"
        //                 path="/pasta"
        //                 />
        //                  <CardItem 
        //                 src='images/pad_thai.jpg'
        //                 text="Pad Thai"
        //                 label= "Pad Thai"
        //                 path="/pad thai"
        //                 />
        //             </ul>
                    
        //         </div>
        //     </div>
        // </div>
    )
}

export default DinnerCards;
