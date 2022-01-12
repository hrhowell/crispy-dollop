import React from 'react'
import '../SignUp/SignUp.css';

import '../../../../App.css';
import Navbar from '../../../Navbar';

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate} from 'react-router-dom';

export default function UpdateProfile() {
    const [firstname, setFristname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const [uData, setUData] = useState("")
    const navigate = useNavigate()


  function submit2(){
     const a = firstname
     const b = lastname
     const c = email
     const d = username
     const e = password
      axios.post(`http://localhost:9090/users/UpdateProfile/${a}/${b}/${c}/${d}/${e}`)
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
          <div className="main2">
            <div className="sub-main2">
              <div>
                {/* <div className="imgs">
                  <div className="container-image">
                    <img src="images/profile.jpg"alt="profile" className="profile"/>
                  </div>
                </div> */}
                <div>
                  <div>
                  <h1 id="t2">Update Profile</h1>
                  </div>
                 <div className="form">
                 <div className="first-input">
                    <p>First Name</p>
                    <input id="signupinput" type="text" placeholder="Enter your first name" className="firstname" onChange={e => setFristname(e.target.value)}/>
                  </div>
                  <div className="second-input">
                    <p>Last Name</p>
                    <input id="signupinput" type="text" placeholder="Enter your last name" className="lastname" onChange={e => setLastname(e.target.value)}/>
                  </div>
                  <div className="third-input">
                    <p>Email</p>
                    <input id="signupinput" type="text" placeholder="Enter your email" className="email" onChange={e => setEmail(e.target.value)}/>
                  </div>
                  <div className="forth-input">
                    <p>Username</p>
                    <input id="signupinput" type="password" placeholder="Enter your username" className="username" onChange={e => setUsername(e.target.value)}/>
                  </div>
                  <div className="fith-input">
                    <p>Password</p>
                    <input id="signupinput" type="password" placeholder="Enter your last name" className="password" onChange={e => setPassword(e.target.value)}/>
                  </div>
                 </div>
                  <div className="login-button2">
                    <button id="button2" onClick={submit2}>Update</button>
                  </div>
                  </div>
              </div>
            </div>
            
          </div>
        </>
      );
}

