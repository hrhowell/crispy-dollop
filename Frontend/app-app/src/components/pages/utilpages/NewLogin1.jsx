import { useState, useEffect } from 'react';
import { useSessionStorage } from './useSessionStorage';
// /**************************************WorksCited***************************************** 
//  * Title: NA
//  * Author: Christian Mills
//  * Date: 12/28/21 (Acccessed 1/10/22)
//  * Code Version: NA
//  * Availabity: NA
//  *
//  * Title: "Using Session Storage in React with Hooks"
//  * Author: Nick Scialli 
//  * Date: 3/28/21 (Acccessed 1/10/22)
//  * Code Version: NA
//  * Availabity: https://typeofnan.dev/using-session-storage-in-react-with-hooks/
//  * 
// ******************************************************************************************/




function NewLogin1() {
    const [username, setUsername] = useSessionStorage('username', "");
   console.log(username);

    return (
       
        <form method="post" action="http://localhost:9090/api/v1/users/login/login" >
        
        <br />
        <input type="text" name="username" placeholder="Enter your username" id="username" />
        <br />
        
        <br />
        <input type="password" name="password" placeholder="Enter your password" id="username" />
        <br />
       
        
        <br />
        <button type="submit" onClick={() => {setUsername(document.getElementById("username").value);}}>Login</button>
        
    </form>
    
       
    )
}

export default NewLogin1


