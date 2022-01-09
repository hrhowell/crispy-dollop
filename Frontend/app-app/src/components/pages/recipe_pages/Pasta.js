import React from "react"
import Navbar from "../../Navbar";
import '../utilpages/UserProfiles.css';
import { PastaIng } from '../RecApiCalls/PastaApi';
import { RecipeButton } from '../../buttons/RecipeButton';

function Pasta (){
    return(
    <>
    <Navbar/>
    <img src="images/pasta.jpg"/>
    <br/>
    <br/>
    <PastaIng/>
    <RecipeButton/>
    </>
    )
        

   
}export default Pasta;
