import axios from "axios";
import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import { SaladIng } from '../RecApiCalls/SaladApi';
import { LunchButton } from "../../buttons/LunchButton";
import '../../pages/UtilPages/Recipe/UserRecipes.css'

function Salad (){
    return(
    <>
    <Navbar/>
    <div id="maindiv">
   
    
    <img src="images/salad6.jpg"alt="salad" className="salad"/>
    <h1>Grilled Salad Chicken <br/> with Raspberry Vinegrette</h1>
    <div id="userdiv">
    <p>Char-grilled chicken meets bitter baby greens with a soft finish from raspberries for an unusual take on a lunch classic.</p>
    <hr/>
    </div>
    
    <SaladIng/>
    <br/>
    <LunchButton/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    </div>
    </>
    )
        

}
export default Salad;
