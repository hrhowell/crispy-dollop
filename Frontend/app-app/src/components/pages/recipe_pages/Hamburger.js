import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import { HamburgerIng } from '../RecApiCalls/HamburgerApi';
import { DinnerButton } from "../../buttons/DinnerButton";
import '../../pages/UtilPages/Recipe/UserRecipes.css'

function Hamburger (){
    return(
    <>
    <Navbar/>
    <div id="maindiv">
    <img src="images/hamburger.jpg"/>
    
    <h1>Very Gouda Hamburger</h1>
    <div id="userdiv">
    <p>What's better than a homemade hamburger? A homemade hamburger with creamy smoked gouda melted over the top.</p>
    <hr/>
    </div>
    <HamburgerIng/>
    <br/>
    <DinnerButton/>
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
export default Hamburger;
