import React from "react";
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import {ToastIng} from '../RecApiCalls/ToastApi';
import { RecipeButton } from "../../buttons/RecipeButton";
import { EmailButton } from "../../buttons/EmailRecipe";

function Toast () {
    return(
    <>
    <Navbar/>
    <div id="maindiv">
    <img src="images/toast.jpg"/>
    
    <h1>Aboslutely Avocado Toast</h1>
    <div id="userdiv">
    <p>It's a vegan, green, power machine! Charge up your morning with pumpkin seeds and flavorful basil chiffonade!</p>
    <hr/>
    </div>
    <ToastIng/>
    <RecipeButton/>
    <EmailButton/>
    </div>
    </>
    )
     
}

export default Toast;
