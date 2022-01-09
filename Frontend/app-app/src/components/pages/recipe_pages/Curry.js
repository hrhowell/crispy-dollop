import React from "react"
import Navbar from "../../Navbar";
import '../utilpages/UserProfiles.css';
import {CurryIng} from '../RecApiCalls/CurryApi';
import { RecipeButton } from '../../buttons/RecipeButton';

function Curry (){
    return(
    <>
    <Navbar/>
    <img src="images/curry.jpg"/>
    <br/>
    <br/>
     <CurryIng/>   
     <RecipeButton/>
    </>
    )
    
}export default Curry;
