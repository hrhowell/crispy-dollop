import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import {BobaIng}from '../RecApiCalls/BobaApi';
import { RecipeButton } from "../../buttons/RecipeButton";
import { EmailButton } from "../../buttons/EmailRecipe";

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
    <RecipeButton/>
    <EmailButton/>
    </div>
    </>
    )
        

    
}export default BobaTea;
