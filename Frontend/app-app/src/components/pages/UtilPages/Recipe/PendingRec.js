import AdminNavbar2 from "../../../AdminNavbar2"
import { PendingRecipesConst } from './PendingRecApi';
import './PendingRecipes.css';
import ApproveDeny from "./ApproveDeny";
import Navbar from "../../../Navbar";

function PendingRecipes(){

 return(
   <>
    <AdminNavbar2/>
    <div id="left">
    <PendingRecipesConst/>
    <div>
      
    </div>
      
    
    
               
    </div>
    {/* <div id="right">
      <div id="statusDiv">
            <form id ="statusForm" method = "post" action = "http://localhost:9090/api/v1/recipes/users//approve-deny/{recID}/{status}">
                <input id="status" name="status" type="text" placeholder='approve or deny'>Please Type 'approve' or 'deny'</input>
                <button id ="statusButton"type="submit">Submit Status</button>
            </form>

            </div>
    </div>
     */}
   </>
)
 }

 export default PendingRecipes;