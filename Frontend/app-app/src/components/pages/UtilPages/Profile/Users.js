import FirstNavbar from "../../../FirstNavbar"
import { UserProfiles } from "../Profile/UserProfiles";
import '../Recipe/UserRecipes.css'

function Users(){

 return(
   <>
    <FirstNavbar/>
    <div id="maindiv">
    <UserProfiles/>
    </div>
   </>
)
 }

 export default Users;