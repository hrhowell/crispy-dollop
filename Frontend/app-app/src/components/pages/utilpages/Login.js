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
//   const [password, setPassword ] = useState("");
//   const [userRole, setUserRole] = useState(""); 
//   const navigate = useNavigate()


//   function submit(){
//      const a = username
//      const  b = password
//      axios.post(`http://localhost:9090/users/login/${a}/${b}`)
//       .then(response =>{
//         if(response.data ==="ok" ) 
//          { 
//            axios.get(`http://localhost:9090/users/${username}/`)
//              .then(response =>{
//                      user = response.data;
//                      e => setUserID(user.ID);
//                      e => setFirstName(user.firstName);
//                      e => setLastName(user.lastName);
//                      e => setUserRole(user.userRole);
//                      navigate("/recipes");}
//  
})
//            

//       })
//       .catch(err => {
//           console.log("Error occured", err);
//       })
     


 
//     return (
//         <div className="App">
//       <h3>Session Storage in React</h3>
//       <form onSubmit={SessionDataStorage}>
//         <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setUserName(e.target.value)} />
//         <input id="loginput" type="password" placeholder="Enter your password" className="password" onChange={e => setPassword(e.target.value)}/>
//         <button type="submit" onClick={submit}>Login</button>
//         <a className="loga" href="/passwordrecovery">Forgot Password ?</a> Or <a className="loga" href="/sign-up">Sign Up</a>
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
//     sessionStorage.setItem("password", password);   
//     sessionStorage.setItem("userRole", userRole);

//     console.log(userID);
//     console.log(firstName);
//     console.log(lastName);
//     console.log(userName);
//     console.log(password);
//     console.log(userRole);
//   };

// export default Login

import React from 'react'
import './Login.css';
import '../../../../App.css';
import Navbar from '../../../Navbar';
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate} from 'react-router-dom';


export default function Login() {
    const [uname, setUsername] = useState('');
    const [upassword, setPassword] = useState('');
    
    const [uData, setUData] = useState("")
    const navigate = useNavigate()


  function submit(){
     const a = uname
     const  b = upassword
      axios.post(`http://localhost:9090/users/login/${a}/${b}`)
        .then(response =>{
          if(response.data ==="ok" ) { navigate("/recipes");}

        })
        .catch(err => {
            console.log("Error occured", err);
        })
       

  }
    return(
        <>
          <Navbar/>
          <div className="main1">
            <div className="sub-main1">
              <div>
                <div className="imgs">
                  <div className="container-image">
                    <img src="images/profile.jpg"alt="profile" className="profile"/>
                  </div>
                </div>
                <div>
                  <div>
                  <h1 id="t1">Login Page</h1>
                  </div>
               
                 <div className="form">
                 
                 <div className="first-input">
                    <p>Username</p>
                    <input id="loginput" type="text" placeholder="Enter your username" className="username" onChange={e => setUsername(e.target.value)}/>
                  </div>
                  <div className="second-input">
                    <p>Password</p>
                    <input id="loginput" type="password" placeholder="Enter your password" className="password" onChange={e => setPassword(e.target.value)}/>
                  </div>
                 </div>
                  <div className="login-button1">
                    <button id="button1" onClick={submit}>Login</button>
                  </div>
                  <p className="link">
                    <a className="loga" href="/passwordrecovery">Forgot Password ?</a> Or <a className="loga" href="/sign-up">Sign Up</a>
                  </p>
                  </div>
              </div>
            </div>
            
          </div>
         
        </>
      );
}