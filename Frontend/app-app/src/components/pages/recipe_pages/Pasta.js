import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import { PastaIng } from '../RecApiCalls/PastaApi';
import { RecipeButton } from "../../buttons/RecipeButton";
import { EmailButton } from "../../buttons/EmailRecipe";

function Pasta (){
    return(
    <>
    <Navbar/>
    <div id="maindiv">
    <img src="images/pasta.jpg"/>
    
    <h1>Quick and Sophisticated<br/> Clam Linguine</h1>
    <div id="userdiv">
    <p>Briny clams combine with lemon, parmesan, and garlic to brighten a snappy seafood dinner.</p>
    <hr/>
    </div>
    <PastaIng/>
    <RecipeButton/>
    <EmailButton/>
    </div>
    </>
    )
        

   
}export default Pasta;
