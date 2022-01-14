import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import  { LatteIng } from '../RecApiCalls/LatteApi';
import { BeveragesButton } from "../../buttons/BeveragesButton";
import { EmailButton } from "../../buttons/EmailRecipe";
import { ShoppingListButton } from "../../buttons/ShoppingListButton";

function Latte (){
    return(
    <>
    <Navbar/>
    <div id="maindiv">
    
    <img src="images/latte.jpg"/>
    <h1>Express Espresso Latte</h1>
    <div id="userdiv">
    <p>If coffee is a good way to start your morning, this rich and nuanced cup will become your  new favorite!</p>
    <hr/>
    </div>
    <LatteIng/>
    <BeveragesButton/>
    <EmailButton/>
    <ShoppingListButton/>
    <br/>
     <br/>
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

export default Latte;
