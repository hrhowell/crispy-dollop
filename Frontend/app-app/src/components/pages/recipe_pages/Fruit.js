import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import { FruitIng } from '../RecApiCalls/FruitApi';
import { RecipeButton } from "../../buttons/RecipeButton";

function Fruit (){
    return(
    <>
    <Navbar/>
    <img src="images/fruit.jpg"/>

    <FruitIng/> 
    <RecipeButton/>

    </>
    )
    
}
export default Fruit;
