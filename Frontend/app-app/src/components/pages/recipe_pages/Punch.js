import React from "react"
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import { PunchIng } from '../RecApiCalls/PunchApi';
import { RecipeButton } from "../../RecipeButton";

function Punch (){
    return(
    <>
    <Navbar/>
    <img src="images/punch.jpg"/>
    <PunchIng/>
    <RecipeButton/>
    </>
    )
        

   
}
export default Punch;
