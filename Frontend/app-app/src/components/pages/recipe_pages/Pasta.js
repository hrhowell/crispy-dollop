import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import { PastaIng } from '../RecApiCalls/PastaApi';
import { DinnerButton } from "../../buttons/DinnerButton";
import '../../pages/UtilPages/Recipe/UserRecipes.css'

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
    <br/>
    <DinnerButton/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    </div>
    </>
    )
        

   
}export default Pasta;
