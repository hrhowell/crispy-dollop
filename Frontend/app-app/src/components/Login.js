import './Login.css';
import profile from './images/profile.jpg';
import email from './images/email.jpg';
import pass from './images/fa.PNG';
export default function Login(){
    return(
      <>
        <div className="main">
          <div className="sub-main">
            <div>
              <div className="imgs">
                <div className="container-image">
                  <img src={profile} alt="profile" className="profile"/>
                </div>
              </div>
              <div>
                <div>
                <h1>Login Page</h1>
                </div>
               <div className="form">
               <div className="first-input">
                  <p>Username</p>
                  <input type="text" placeholder="Enter your email" className="username"/>
                </div>
                <div className="second-input">
                  <p>Password</p>
                  <input type="password" placeholder="Enter your password" className="password"/>
                </div>
               </div>
                <div className="login-button">
                  <button>Login</button>
                </div>
                <p className="link">
                  <a href="#">Forgot Password ?</a> Or <a href="#">Sign Up</a>
                </p>
                </div>
            </div>
          </div>
        </div>
      </>
    );
}