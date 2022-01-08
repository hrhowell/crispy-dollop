import React from "react"
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import {CurryIng} from '../RecApiCalls/CurryApi';
import { RecipeButton } from '../../buttons/RecipeButton';

function Curry (){
    return(
    <>
    <Navbar/>
    <img src="images/curry.jpg"/>
     <CurryIng/>   
     <RecipeButton/>
    </>
    )
    
}export default Curry;
