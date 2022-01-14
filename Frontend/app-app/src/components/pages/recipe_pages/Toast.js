import React from "react";
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import {ToastIng} from '../RecApiCalls/ToastApi';
import { BreakfastButton } from "../../buttons/BreakfastButton";
import { EmailButton } from "../../buttons/EmailRecipe";
import { ShoppingListButton } from "../../buttons/ShoppingListButton";

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
    <BreakfastButton/>
    <EmailButton/>
    <ShoppingListButton/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    </div>
    </>
    )
     
}

export default Toast;
