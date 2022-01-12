import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import './DessertsCards.css';
/**********************************Works Cited************************************
 * Title: React Website Tutorial - Beginner React JS Project Fully Responsive
 * Author: Brian Design 
 * Date: 8/11/20 (Accessed 1/1/22)
 * Code Version: React
 * Availability: https://youtu.be/I2UBjN5ER4s
 *********************************************************************************/

function DessertsCards() {
    return (

        <div className='cards'>
            <div id="main-re">
                <div id="bigDiv1" className="bigDivAll">
                    <a className="hov" href="/gelato">
                        <div id="submain14" className="submainAll">
                            <div id="bottom">Gelato</div>
                        </div>
                    </a>
                    
                    <div id="pdiv">
                    <h2 id="h2p">Black Forest Gelato with Ganache</h2>
                    </div>
                </div>

                <div id="bigDiv2" className="bigDivAll">
                    <a className="hover" href="/lemon-tart">
                        <div id="submain24" className="submainAll" >
                            <div id="bottom">Lemon Tart</div>
                        </div>
                    </a>
                    
                    <div id="pdiv">
                    <h2 id="h2p">Lovely Lemon Tart</h2>
                    </div>
                </div>

                <div id="bigDiv3" className="bigDivAll">
                    <a className="hover" href="/pavlova">
                    <div id="submain34" className="submainAll">
                        <div id="bottom">Pavlova</div>
                    </div>
                    </a>
                    <div id="pdiv">
                    <h2 id="h2p">Pretty Pavlova</h2>
                    </div>
                </div>

                {/* <div id="bigDiv4">
                    <a className="hover" href="/desserts">
                        <div id="submain44">
                            <div id="bottom">Desserts</div>
                        </div>
                    </a>
                    <div id="pdiv">
                    <h2 id="h2p">Indulge your sweet tooth with yummy desserts</h2>
                    </div>
                </div> */}

                {/* <div id="bigDiv5">
                    <a className="hover" href="/snacks">
                        <div id="submain54">
                            <div id="bottom">Snacks</div>
                        </div>
                    </a>
                    
                    <div id="pdiv">
                    <h2 id="h2p">Refresh with a pick-me-up snacks</h2>
                    </div>
                </div> */}

                {/* <div id="bigDiv6">
                    <a className="hover" href="/beverages">
                        <div id="submain64">
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
        //     <h1>Desserts</h1>
        //     <div className="cards__container">
        //         <div className="cards__wrapper">
        //             <ul className="cards__item">
        //                  <CardItem 
        //                 src='/Frontend/app-app/src/components/images/gelato.jpg'
        //                 text="Black Forest Gelato with Ganache"
        //                 label= "Gelato"
        //                 path="/gelato"
        //                 />
        //                  <CardItem 
        //                 src='images/lemon_tart.jpg'
        //                 text="Lemon Tart"
        //                 label= "Lemon Tart"
        //                 path="/lemon-tart"
        //                 />
        //                  <CardItem 
        //                 src='images/pavlova.jpg'
        //                 text= "Pretty Pavlova"
        //                 label= "Pavlova"
        //                 path="/pavlova"
        //                 />
        //             </ul>
                   
        //         </div>
        //     </div>
        // </div>
    )
}

export default DessertsCards;
