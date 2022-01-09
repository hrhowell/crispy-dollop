import React from "react"
import Navbar from "../../Navbar";
import '../utilpages/UserProfiles.css';
import { HummusIng } from '../RecApiCalls/HummusApi';
import { RecipeButton } from '../../buttons/RecipeButton';

function Hummus (){
    return(
    <>
    <Navbar/>
    <img src="images/hummus.jpg"/>
    <br/>
    <br/>
    <HummusIng/>
    <RecipeButton/>
    </>
    )
        

    
}
export default Hummus;
