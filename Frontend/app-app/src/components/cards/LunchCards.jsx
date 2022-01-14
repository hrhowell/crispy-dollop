    import React from 'react';
import CardItem from './CardItem';
import './LunchCards.css';

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
            <div id="main-re00">
                <div id="bigDiv1" className="bigDivAll">
                    <a className="hov" href="bento">
                        <div id="submain12" className="submainAll">
                            <div id="bottom">Bento</div>
                        </div>
                    </a>
                    
                    <div id="pdiv">
                    <h2 id="h2p">Katsu Pork Bento Box</h2>
                    </div>
                </div>

                <div id="bigDiv2" className="bigDivAll">
                    <a className="hover" href="/salad">
                        <div id="submain22" className="submainAll">
                            <div id="bottom">Salad</div>
                        </div>
                    </a>
                    
                    <div id="pdiv">
                    <h2 id="h2p">Grilled Chicken Salad<br/>with Raspberry Vinegrette</h2>
                    </div>
                </div>

                <div id="bigDiv3" className="bigDivAll">
                    <a className="hover" href="/curry">
                        <div id="submain42" className="submainAll">
                            <div id="bottom">Curry</div>
                        </div>
                    </a>
                    <div id="pdiv">
                    <h2 id="h2p">Yellow Curry</h2>
                    </div>
                </div>

                {/* <div id="bigDiv5">
                    <a className="hover" href="/snacks">
                        <div id="submain5">
                            <div id="bottom">Snacks</div>
                        </div>
                    </a>
                    
                    <div id="pdiv">
                    <h2 id="h2p">Yellow Curry</h2>
                    </div>
                </div>

                <div id="bigDiv6">
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
        //     <h1>Lunch</h1>
        //     <div className="cards__container">
        //         <div className="cards__wrapper">
        //             <ul className="cards__item">
        //                  <CardItem 
        //                 src='images/bento.jpg'
        //                 text=" Katsu Pork Bento Box"
        //                 label= "Bento"
        //                 path="/bento"
        //                 />
        //                  <CardItem 
        //                 src='images/salad.jpg'
        //                 text=" Grilled  Salad Chicken with Raspberry Vinegrette "
        //                 label= "Salad"
        //                 path="/salad"
        //                 />
        //                  <CardItem 
        //                 src='images/katsu.jpg'
        //                 text="Katsu Pork Bento Box"
        //                 label= "Bento"
        //                 path="/bento"
        //                 />
        //                 <CardItem 
        //                 src='images/curry.jpg'
        //                 text="Yellow Curry"
        //                 label= "Curry"
        //                 path="/curry"
        //                 />
                        
                       
        //             </ul>
        //         </div>
        //     </div>
        // </div>
    )
}

export default LunchCards;
