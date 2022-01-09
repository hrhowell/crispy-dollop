import React from "react"
import Navbar from "../../Navbar";
import '../utilpages/UserProfiles.css';
import { FruitIng } from '../RecApiCalls/FruitApi';
import { RecipeButton } from '../../buttons/RecipeButton';

function Fruit (){
    return(
    <>
    <Navbar/>
    <img src="images/fruit.jpg"/>
    <br/>
    <br/>
    <FruitIng/> 
    <RecipeButton/>
    </>
    )
    
}
export default Fruit;
