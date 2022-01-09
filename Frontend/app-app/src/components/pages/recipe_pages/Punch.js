import React from "react"
import Navbar from "../../Navbar";
import '../utilpages/UserProfiles.css';
import { PunchIng } from '../RecApiCalls/PunchApi';
import { RecipeButton } from '../../buttons/RecipeButton';

function Punch (){
    return(
    <>
    <Navbar/>
    <img src="images/punch.jpg"/>
    <br/>
    <br/>
    <PunchIng/>
    <RecipeButton/>
    </>
    )
        

   
}
export default Punch;
