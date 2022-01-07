import React from "react"
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import { HummusIng } from '../RecApiCalls/HummusApi';
import { RecipeButton } from "../../RecipeButton";

function Hummus (){
    return(
    <>
    <Navbar/>
    <img src="images/hummus.jpg"/>
    <HummusIng/>
    <RecipeButton/>
    </>
    )
        

    
}
export default Hummus;
