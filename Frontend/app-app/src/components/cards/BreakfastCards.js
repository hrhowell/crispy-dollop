import React from 'react';
import CardItem from './CardItem';

import './BreakfastCards.css';
// import './Cards.css';
// import Search from './Search';

// import Search from '../components/pages/Search';
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
            <div id="main-re">
                <div id="bigDiv1" className="bigDivAll">
                    <a className="hov" href="/pancakes">
                        <div id="submain11" className="submainAll">
                            <div id="bottom">Pancakes</div>
                        </div>
                    </a>
                    
                    <div id="pdiv">
                    <h2 id="h2p">Fluffy Buttermilk Pancakes</h2>
                    </div>
                </div>

                <div id="bigDiv2" className="bigDivAll">
                    <a className="hover" href="/toast">
                        <div id="submain21" className="submainAll">
                            <div id="bottom">Toast</div>
                        </div>
                    </a>
                    
                    <div id="pdiv">
                    <h2 id="h2p">Aboslutely Avocado Toast</h2>
                    </div>
                </div>

                <div id="bigDiv3" className="bigDivAll">
                    <a className="hover" href="/granola">
                    <div id="submain31" className="submainAll">
                        <div id="bottom">Oat</div>
                    </div>
                    </a>
                    <div id="pdiv">
                    <h2 id="h2p">Wholesome Whole Food Oat Granola</h2>
                    </div>
                </div>

                {/* <div id="bigDiv4">
                    <a className="hover" href="/desserts">
                        <div id="submain4">
                            <div id="bottom">Desserts</div>
                        </div>
                    </a>
                    <div id="pdiv">
                    <h2 id="h2p">Indulge your sweet tooth with yummy desserts</h2>
                    </div>
                </div> */}

                {/* <div id="bigDiv5">
                    <a className="hover" href="/snacks">
                        <div id="submain5">
                            <div id="bottom">Snacks</div>
                        </div>
                    </a>
                    
                    <div id="pdiv">
                    <h2 id="h2p">Refresh with a pick-me-up snacks</h2>
                    </div>
                </div>

                <div id="bigDiv6">
                    <a className="hover" href="/beverage">
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
        //     <h1>Breakfast</h1>
        //     <div className="cards__container">
        //         <div className="cards__wrapper">
        //             <ul className="cards__item">
        //                  <CardItem 
        //                 src='images/pancakes.jpg'
        //                 text=" Fluffy Buttermilk Pancakes"
        //                 label= "Pancakes"
        //                 path="/pancakes"
        //                 />
        //                  <CardItem 
        //                 src='images/toast.jpg'
        //                 text="Aboslutely Avocado Toast"
        //                 label= "Toast"
        //                 path="/toast"
        //                 />
        //                 <CardItem 
        //                 src='images/granola.jpg'
        //                 text="Wholesome Whole Food Oat Granola"
        //                 label= "Granola"
        //                 path="/granola"
        //                 />
                        
                        
        //             </ul>
        //         </div>
        //     </div>
        // </div>
    )
}

export default BreakfastCards;