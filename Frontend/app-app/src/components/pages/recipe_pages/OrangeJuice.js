import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import { OrangeJuiceIng } from '../RecApiCalls/OrangeJuiceApi';
import { RecipeButton } from "../../buttons/RecipeButton";
import { EmailButton } from "../../buttons/EmailRecipe";

function OrangeJuice (){
    return(
    <>
    <Navbar/>
    <div id="maindiv">
   
    <img src="images/orange_juice.jpg"/>
    <h1>Old-Fashioned Orange Juice</h1>
    <div id="userdiv">
    <p>Nothing says good morning like a freshly-squeezed glass of sunshine!</p>
    <hr/>
    </div>
    <OrangeJuiceIng/>
    <RecipeButton/>
    <EmailButton/>
    </div>
    </>
    )
        

    
}
export default OrangeJuice;
