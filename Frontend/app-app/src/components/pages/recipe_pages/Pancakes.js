import React from "react"
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import {PancakesIng} from '../RecApiCalls/PancakesApi';
import { RecipeButton } from '../../buttons/RecipeButton';


function Pancakes (){
    return(
    <>
    <Navbar/>
    <img src="images/pancakes.jpg"/>
    <PancakesIng/>
    <RecipeButton/>
    </>
    )
        

   
}
export default Pancakes;
