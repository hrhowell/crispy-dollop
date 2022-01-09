import React from "react"
import Navbar from "../../Navbar";
import '../utilpages/UserProfiles.css';
import { HamburgerIng } from '../RecApiCalls/HamburgerApi';
import { RecipeButton } from '../../buttons/RecipeButton';

function Hamburger (){
    return(
    <>
    <Navbar/>
    <img src="images/hamburger.jpg"/>
    <br/>
    <br/>
    <HamburgerIng/>
    <RecipeButton/>
    </>
    )
        

    
}
export default Hamburger;
