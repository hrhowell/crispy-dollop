import Navbar from "../../../Navbar"
import { ApprovedRecipes } from './UserRecipesApi';
// import '../Profile/UserProfiles.css';
import './UserRecipes.css';

function UserRecipes(){

 return(
   <>
    <Navbar/>
    <div id="maindiv">
    <div id="headerdiv">
    <h1 id="mainh1">User Recipes</h1>
    </div>
    <ApprovedRecipes/>
    </div>
   </>
)
 }

 export default UserRecipes;