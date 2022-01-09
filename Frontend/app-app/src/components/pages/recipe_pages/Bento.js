import axios from "axios";
import React from "react"
import Navbar from "../../Navbar";
import { RecipeButton } from "../../buttons/RecipeButton";
import '../utilpages/UserProfiles.css';
import { BentoIng } from '../RecApiCalls/BentoApi';

function Bento (){

    return(

    <>
    <Navbar/>
    <img src="images/katsu.jpg"/>
    <br/>
    <br/>
    <BentoIng/>
    <RecipeButton/>
    </>
    )
        

    
}
export default Bento;
