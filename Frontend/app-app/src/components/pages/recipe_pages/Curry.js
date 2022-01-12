import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import {CurryIng} from '../RecApiCalls/CurryApi';
import { RecipeButton } from "../../buttons/RecipeButton";
import { EmailButton } from "../../buttons/EmailRecipe";

function Curry (){
    return(
    <>
    <Navbar/>
    <div id="maindiv">
    <img src="images/curry.jpg"/>
    
    <h1>Yellow Curry</h1>
    <div id="userdiv">
    <p>Take-out has nothing on this quick and easy lunch. Spice up supper with our lucious and sunny yellow curry!</p>
    <hr/>
    </div>
     <CurryIng/> 
     <RecipeButton/> 
     <EmailButton/>
     </div>
    </>
    )
    
}export default Curry;
