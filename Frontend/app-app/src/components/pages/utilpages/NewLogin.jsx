import React from 'react'
import '../../../App.css';
import Navbar from '../../Navbar';
import { useState } from "react";
import axios from "axios";
import { useNavigate} from 'react-router-dom';

function NewLogin() {

    function setSesUsername() {
    var username = document.getElementById("userIDInput");
    sessionStorage.setItem('username', username.value);
    
  }
  
  function setSesPassword() {
     var password = document.getElementById("passInput");
    sessionStorage.setItem('password', password.value);
   
  }
    function submitLogin(){
            console.log(document.getElementById("passInput").value());
            setSesUsername()
            setSesPassword()
            
            
            // fetch('http://localhost:9090/api/v1/users/login/login',
            // {
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json'
            //       },
            //       method: "POST",
                  // body: JSON.stringify({
                  //   username: uNameInp,
                  //   password: passInp,
                    
               //   })
            // }).then(response => {  
            // }).catch(err => console.log("Error occured", err))
        
           
          }
        
          
        
          return (
              <div className="App">
                <Navbar/>
                
                <form>
                  <input id="userIDInput" type="text" placeholder="Enter your username"   />
                  <input id="passInput" type="password" placeholder="Enter your password" className="password" />
                  <button type="button" onClick={submitLogin}>Login</button>
                  <a className="loga" href="/passwordrecovery">Forgot Password ?</a> Or <a className="loga" href="/sign-up">Sign Up</a>
                </form>
              </div>
          )
}

export default NewLogin


