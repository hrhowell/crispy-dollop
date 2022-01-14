import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import { DinnerButton } from "../../buttons/DinnerButton";
import { EmailButton } from "../../buttons/EmailRecipe";
import {PastaIng} from "../RecApiCalls/PastaApi";

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
    <DinnerButton/>
    <EmailButton/>
    <br/>
     <br/>
     <br/>
     <br/>
    </div>
    </>
    )
        

   
}export default Pasta;
