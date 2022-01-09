import React from "react"
import Navbar from "../../Navbar";
import '../utilpages/UserProfiles.css';
import {GranolaIng} from '../RecApiCalls/GranolaApi';
import { RecipeButton } from '../../buttons/RecipeButton';

function Granola (){
    return(
    <>
    <Navbar/>
    <img src="images/granola.jpg"/>
    <br/>
    <br/>
    <GranolaIng/>
    <RecipeButton/>
    </>
    )
        

    
}
export default Granola;
