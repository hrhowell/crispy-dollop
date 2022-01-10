import Navbar from "../../Navbar"
import { ApprovedRecipes } from './UserRecipesApi';
import './UserProfiles.css';

function UserRecipes(){

 return(
   <>
    <Navbar/>
    <ApprovedRecipes/>
   </>
)
 }

 export default UserRecipes;