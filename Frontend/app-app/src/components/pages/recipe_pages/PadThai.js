import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import  { PadThaiIng } from '../RecApiCalls/PadThaiApi';
import { DinnerButton } from "../../buttons/DinnerButton";
import '../../pages/UtilPages/Recipe/UserRecipes.css'

function PadThai(){
    return(
    <>
    <Navbar/>
    <div id="maindiv">
    
    <img src="images/pad_thai.jpg"/>
    <h1>Presto Pad Thai</h1>
     <div id="userdiv">
    <p>Zippy, spicy, and quick to put together. You can be a hero for a weeknight meal with this pad thai!</p>
    <hr/>
    </div>
    <PadThaiIng/>
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
        

}
export default PadThai;
