import React, {useState, useEffect} from 'react';
import './SignUp.css';
import '../../../../App.css';
import FirstNavbar from '../../../FirstNavbar';

import axios from "axios";
import { useNavigate} from 'react-router-dom';


export default function SignUp() {
    const [ufirstname, setFristname] = useState('');
    const [ulastname, setLastname] = useState('');
    const [uemail, setEmail] = useState('');
    const [uuname, setUsername] = useState('');
    const [uupassword, setPassword] = useState('');
    
    const [uData, setUData] = useState("")
    const navigate = useNavigate()

    const url =""

    const [email] = useState('');

    const fetchEmail = ()=>{
        var recipe = ""
        axios.post(`http://localhost:9090/api/v1/email/email-sent`).then(res =>{ //http://3.14.3.79:9090/api/v1/recipes/
            console.log(res);
            setEmail(res.data);
        });
        

    }

    useEffect(()=>{
        fetchEmail();
    }, [] );

    function signup(e) {
        e.preventDefault();
        axios.post(url, {
            email: email.email
        })
            .then(res => {
                console.log(res.data)
            })
    }


    function handle(e){
        const newdata={...email}
        newdata[e.target.id] = e.target.value
        setEmail(newdata)
        console.log(newdata)
    }



  function submit2(){
    sessionStorage.setItem('newEmail', uemail);
     const a = ufirstname
     const b = ulastname
     const c = uemail
     const d = uuname
     const e = uupassword
      axios.post(`http://localhost:9090/users/signup/${a}/${b}/${c}/${d}/${e}`)
        .then(response =>{
          if(response.data ==="ok" ) { navigate("/signup-email-sent");}

        })
        .catch(err => {
            console.log("Error occured", err);
        })
  }
    return(
        <>
          <FirstNavbar/>
          <div className="main2">
            <div className="sub-main2">
              <div>
              <form onSubmit={(e) => signup(e)}>
                <div>
                  <div>
                  <h1 id="t2">Sign Up Page</h1>
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
                    <input id="signupinput" type="text" placeholder="Enter your username" className="username" onChange={e => setUsername(e.target.value)}/>
                  </div>
                  <div className="fith-input">
                    <p>Password</p>
                    <input id="signupinput" type="password" placeholder="Enter your last name" className="password" onChange={e => setPassword(e.target.value)}/>
                  </div>
                 </div>
                  <div className="login-button2">
                    <button id="button2" onClick={submit2}>Sign Up</button>
                  </div>
                  </div>
                </form>
              </div>
            </div>
            
          </div>
        </>
      );
}

