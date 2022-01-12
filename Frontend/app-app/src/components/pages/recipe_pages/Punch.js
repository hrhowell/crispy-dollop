import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import { PunchIng } from '../RecApiCalls/PunchApi';
import { BeveragesButton } from "../../buttons/BeveragesButton";
import '../../pages/UtilPages/Recipe/UserRecipes.css'

function Punch (){
    return(
    <>
    <Navbar/>
    <div id="maindiv">
    <img src="images/punch.jpg"/>
    
    <h1>Summery Fruit Punch</h1>
    <div id="userdiv">
    <p>This sweet and refreshing drink has a sun-kissed combo of sparkling soda and fresh fruit to give it a tang!</p>
    <hr/>
    </div>
    <PunchIng/>
    <br/>
    <BeveragesButton/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    </div>
    
    </>
    )
        

   
}
export default Punch;
