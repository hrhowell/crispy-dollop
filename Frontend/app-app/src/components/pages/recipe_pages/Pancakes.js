import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import {PancakesIng} from '../RecApiCalls/PancakesApi';
import { RecipeButton } from "../../buttons/RecipeButton";
import { EmailButton } from "../../buttons/EmailRecipe";

function Pancakes (){
    return(
    <>
    <Navbar/>
    <div id="maindiv">
    <img src="images/pancakes.jpg"/>
    
    <h1>Fluffy Buttermilk Pancakes</h1>
    <div id="userdiv">
    <p>Towering and topped with butter, these breakfast classics are sure to make your morning sweeter!</p>
    <hr/>
    </div>
    <PancakesIng/>
    <br/>
    <RecipeButton/>
    <EmailButton/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    </div>
    </>
    )
        

   
}
export default Pancakes;
