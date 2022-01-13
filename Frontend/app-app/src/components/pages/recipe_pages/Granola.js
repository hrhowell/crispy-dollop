import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import {GranolaIng} from '../RecApiCalls/GranolaApi';
import { RecipeButton } from "../../buttons/RecipeButton";
import { EmailButton } from "../../buttons/EmailRecipe";

function Granola (){
    return(
    <>
    <Navbar/>
    <div id="maindiv">
    <img src="images/granola.jpg"/>
    
    <h1>Wholesome Whole Food Oat Granola</h1>
    <div id="userdiv">
    <p>Why buy when you can make? This sweet granola combines crunchy almonds with sunny oats and honey. </p>
    <hr/>
    </div>
    <GranolaIng/>
    <br/>
    <RecipeButton/>
    <EmailButton/>
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
export default Granola;
