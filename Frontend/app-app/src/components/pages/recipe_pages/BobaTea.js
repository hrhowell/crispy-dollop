import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import {BobaIng}from '../RecApiCalls/BobaApi';
import { BeveragesButton } from "../../buttons/BeveragesButton";
import { EmailButton } from "../../buttons/EmailRecipe";
import { ShoppingListButton } from "../../buttons/ShoppingListButton";

function BobaTea (){
    return(
    <>
    <Navbar/>
    <div id="maindiv">
    
    <img src="images/row_boba.jpg"/>
    <h1>Bubbly Boba Tea</h1>
    <div id="userdiv">
    <p>Chewy boba pearls and floral black tea combines into sweet goodness in a glass. Just add ice and a straw.</p>
    <hr/>
    </div>
    <BobaIng/>
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
    </div>
    </>
    )
        

    
}export default BobaTea;
