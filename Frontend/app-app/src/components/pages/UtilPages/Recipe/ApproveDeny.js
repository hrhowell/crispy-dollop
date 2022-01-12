import React from 'react'

function ApproveDeny() {
    return (
       <>
            <div id="statusDiv">
            <form id ="statusForm" method = "post" action = "http://localhost:9090/api/v1/recipes/users//approve-deny/{recID}/{status}">
                <input id="status" name="status" type="text" placeholder='approve or deny'>Please Type 'approve' or 'deny'</input>
                <button id ="statusButton"type="button">Submit Status</button>
            </form>

            </div>

       </>  
    )
}

export default ApproveDeny
