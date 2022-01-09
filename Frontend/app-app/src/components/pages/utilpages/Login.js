// import React, { useState } from "react";
// /**************************************WorksCited***************************************** 
//  * Title: "Session Storage in React"
//  * Author: NA
//  * Date: 12/28/21 (Acccessed 1/8/22)
//  * Code Version: NA
//  * Availabity: https://www.delftstack.com/howto/react/react-session-storage/
// ******************************************************************************************/





// function Login() {

//   const [userID, setUserID] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [userName, setUserName] = useState(""); 
 
//     return (
//         <div className="App">
//       <h3>Session Storage in React</h3>
//       <form onSubmit={SessionDataStorage}>
//         <input
//           type="text"
//           placeholder="Enter your name"
//           value={name}
//           onChange={(e) => setUserID(e.target.value)}
//           onChange={(e) => setFirstName(e.target.value)}
//           onChange={(e) => setLastName(e.target.value)}
//           onChange={(e) => setUserName(e.target.value)}
          
//         />

//         <button type="submit">submit</button>
//       </form>
//     </div>

    
//     )
// }

// const SessionDataStorage = (e) => {
//     e.preventDefault();
//     sessionStorage.setItem("userID", userID);
//     sessionStorage.setItem("firstName", firstName);
//     sessionStorage.setItem("lastName", lastName);
//     sessionStorage.setItem("userName", userName);
    
//     console.log(userID);
//     console.log(firstName);
//     console.log(lastName);
//     console.log(userName);
//   };

// export default Login
