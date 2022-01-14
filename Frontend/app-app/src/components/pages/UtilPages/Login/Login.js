import React from 'react'
import './Login.css';
import '../../../../App.css';
import FirstNavbar from '../../../FirstNavbar';
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate} from 'react-router-dom';
// import Alert1 from '../SessionStorage/Alert';
import {Alert} from 'reactstrap'


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
          const newName = response.data;
          sessionStorage.setItem('name', newName);
          sessionStorage.setItem('username', uname);
          if(response.data ==="ADMIN" ) { 
            navigate("/adminrecipes");
          }else if(response.data === "no"){
            <Alert>User not found</Alert>
           
          }else {
            navigate("/recipes")
          }
        })
        .catch(err => {
            console.log("Error occured", err);
        })
       

  }
    return(
        <>
          <FirstNavbar/>
          <div className="main1">
            <div className="sub-main1">
              <div>
                <div className="imgs">
                  <div className="container-image">
                    {/* <img src="images/profile.jpg"alt="profile" className="profile"/> */}
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

