import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import './SnacksCard.css';

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
            <div id="main-re">
                <div id="bigDiv1" className="bigDivAll">
                    <a className="hov" href="/celery-boats">
                        <div id="submain15" className="submainAll">
                            <div id="bottom">Celery Boats</div>
                        </div>
                    </a>
                    
                    <div id="pdiv">
                    <h2 id="h2p">Sweet and Simple Celery Boats</h2>
                    </div>
                </div>

                <div id="bigDiv2" className="bigDivAll">
                    <a className="hover" href="/hummus">
                        <div id="submain25" className="submainAll">
                            <div id="bottom">Hummus</div>
                        </div>
                    </a>
                    
                    <div id="pdiv">
                    <h2 id="h2p">Hungry for Hummus</h2>
                    </div>
                </div>

                <div id="bigDiv3" className="bigDivAll">
                    <a className="hover" href="/fruit-stars">
                    <div id="submain35" className="submainAll">
                        <div id="bottom">Fruit</div>
                    </div>
                    </a>
                    <div id="pdiv">
                    <h2 id="h2p">Fresh Fruit Stars</h2>
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
        //     <h1>Recipes</h1>
        //     <div className="cards__container">
        //         <div className="cards__wrapper">
        //             <ul className="cards__item">

        //                  <CardItem 
        //                 src='images/celery.jpg'
        //                 text="Sweet and Simple Celery Boats"
        //                 label= "Celery Boats"
        //                 path="/celery-boats"
        //                 />
        //                  <CardItem 
        //                 src='images/hummus.jpg'
        //                 text="Hungry for Hummus"
        //                 label= "Hummus"
        //                 path="/hummus"
        //                 />
        //                  <CardItem 
        //                 src='images/fruit.jpg'
        //                 text="Fresh Fruit Stars"
        //                 label= "Fruit"
        //                 path="/fruit-stars"
        //                 />
        //             </ul>
        //         </div>
        //     </div>
        // </div>
    )
}

export default SnacksCard;
