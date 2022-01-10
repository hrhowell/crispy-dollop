import React from 'react'
// import './Login.css';
import '../../../App.css';
import Navbar from '../../Navbar';
import { useState } from "react";
import axios from "axios";
import { useNavigate} from 'react-router-dom';

// /**************************************WorksCited***************************************** 
//  * Title: "Session Storage in React"
//  * Author: NA
//  * Date: 12/28/21 (Acccessed 1/8/22)
//  * Code Version: NA
//  * Availabity: https://www.delftstack.com/howto/react/react-session-storage/
// ******************************************************************************************/

function Login() {
  const [userID, setUserID] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword ] = useState("");
  const [userRole, setUserRole] = useState(""); 

  // const [user, setUser] = useState({
  //   userID: '',
  //   firstname: '',
  //   lastname: '',
  //   username: '',
  //   password: '',
  //   userRole: ''
  // });
  console.log(username);
  console.log(password);

  const navigate = useNavigate();

  const handleUsername =(e)=> setUsername(e.target.value);
  const handlePassword =(e)=>setPassword(e.target.value);
  
  function submit(){
    axios.post(`http://localhost:9090/api/v1/users/login/login`,{
     
    }).then(response => {
      // setUsername();
      SessionDataStorage();
      console.log(username, password);
      console.log("Response First Axios:"+ response);
            
    }).catch(err => console.log("Error occured", err))

    const SessionDataStorage = () => {
      sessionStorage.setItem("userID", userID);
      sessionStorage.setItem("firstName", firstname);
      sessionStorage.setItem("lastName", lastname);
      sessionStorage.setItem("username", username);
      sessionStorage.setItem("password", password);   
      sessionStorage.setItem("userRole", userRole);
    };
  }

  console.log(username);

  return (
      <div className="App">
        <Navbar/>
        
        <form>
          <input type="text" placeholder="Enter your username" value={username} onChange={handleUsername} />
          <input type="password" placeholder="Enter your password" className="password" value={password} onChange={handlePassword}/>
          <button type="submit" onClick={submit}>Login</button>
          <a className="loga" href="/passwordrecovery">Forgot Password ?</a> Or <a className="loga" href="/sign-up">Sign Up</a>
        </form>
      </div>
  )
}

export default Login




// export default function Login() {
//     const [uname, setUsername] = useState('');
//     const [upassword, setPassword] = useState('');
    
//     const [uData, setUData] = useState("")
//     const navigate = useNavigate()


//   function submit(){
//      const a = uname
//      const  b = upassword
//       axios.post(`http://localhost:9090/users/login/${a}/${b}`)
//         .then(response =>{
//           if(response.data ==="ok" ) { navigate("/recipes");}

//         })
//         .catch(err => {
//             console.log("Error occured", err);
//         })
       

//   }
//     return(
//         <>
//           <Navbar/>
//           <div className="main1">
//             <div className="sub-main1">
//               <div>
//                 <div className="imgs">
//                   <div className="container-image">
//                     <img src="images/profile.jpg"alt="profile" className="profile"/>
//                   </div>
//                 </div>
//                 <div>
//                   <div>
//                   <h1 id="t1">Login Page</h1>
//                   </div>
               
//                  <div className="form">
                 
//                  <div className="first-input">
//                     <p>Username</p>
//                     <input id="loginput" type="text" placeholder="Enter your username" className="username" onChange={e => setUsername(e.target.value)}/>
//                   </div>
//                   <div className="second-input">
//                     <p>Password</p>
//                     <input id="loginput" type="password" placeholder="Enter your password" className="password" onChange={e => setPassword(e.target.value)}/>
//                   </div>
//                  </div>
//                   <div className="login-button1">
//                     <button id="button1" onClick={submit}>Login</button>
//                   </div>
//                   <p className="link">
//                     <a className="loga" href="/passwordrecovery">Forgot Password ?</a> Or <a className="loga" href="/sign-up">Sign Up</a>
//                   </p>
//                   </div>
//               </div>
//             </div>
            
//           </div>
         
//         </>
//       );
// }