import React from "react";
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import {ToastIng} from '../RecApiCalls/ToastApi';
import { BreakfastButton } from "../../buttons/BreakfastButton";
import '../../pages/UtilPages/Recipe/UserRecipes.css'

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
    <br/>
    <BreakfastButton/>
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
