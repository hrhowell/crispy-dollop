import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import  { PadThaiIng } from '../RecApiCalls/PadThaiApi';
import { RecipeButton } from "../../buttons/RecipeButton";
import { EmailButton } from "../../buttons/EmailRecipe";

function PadThai(){
    return(
    <>
    <Navbar/>
    <div id="maindiv">
    
    <img src="images/pad_thai.jpg"/>
    <h1>Presto Pad Thai</h1>
     <div id="userdiv">
    <p>Zippy, spicy, and quick to put together. You can be a hero for a weeknight meal with this pad thai!</p>
    <hr/>
    </div>
    <PadThaiIng/>
    <RecipeButton/>
    <EmailButton/>
    </div>
    </>
    )
        

}
export default PadThai;
