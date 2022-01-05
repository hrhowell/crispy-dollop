import React from 'react'
import Navbar from '../Navbar'

function SignUp() {
    return (
        <>
        <Navbar/>


        <div className="main">
          <div className="sub-main">
            <div>
              <div className="imgs">
                <div className="container-image">
                  {/* <img src={profile} alt="profile" className="profile"/> */}
                </div>
              </div>
              <div>
                <div>
                    <h1>Signup Page</h1>
                </div>
               <div className="form">
               <div className="first-input">
                  <p>Email</p>
                  <input type="text" placeholder="Enter your email" className="email"/>
                </div>
                <div className="second-input">
                  <p>UserName</p>
                  <input type="text" placeholder="Enter your username" className="username"/>
                </div>
                <div className="third-input">
                  <p>Password</p>
                  <input type="password" placeholder="Enter your password" className="password"/>
                </div>
                <div className="fourth-input">
                  <p>First Name</p>
                  <input type="text" placeholder="Enter your first name" className="firstname"/>
                </div>
                <div className="fifth-input">
                  <p>Last Name</p>
                  <input type="text" placeholder="Enter your last name" className="lastname"/>
                </div>
               </div>
                <div className="login-button">
                  <button>SignUp</button>
                </div>
               
                </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default SignUp
