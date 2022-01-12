import axios from "axios";
import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import { BentoIng } from '../RecApiCalls/BentoApi';
import { RecipeButton } from "../../buttons/RecipeButton";
import { EmailButton } from "../../buttons/EmailRecipe";

function Bento (){

    return(

    <>
    <Navbar/>
    <div id="maindiv">
   
    <img src="images/katsu.jpg"/>
    
    <h1>Katsu Pork Bento Box</h1>
    <div id="userdiv">
    <p>Ditch the sandwhich and rule the lunchroom with a colorful and delicious pork cutlet and veggie bento!</p>
    <hr/>
    </div>
    <BentoIng/>
    <RecipeButton/>
    <EmailButton/>
    </div>
    </>
    )
        

    
}
export default Bento;
