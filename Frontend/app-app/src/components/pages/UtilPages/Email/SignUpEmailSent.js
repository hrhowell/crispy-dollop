import React, { useEffect, useState } from "react";
import axios from'axios';
import { Link } from 'react-router-dom';
import Navbar from '../../../Navbar';
import './SignUpEmailSent.css';


function SignUpEmailSent() {
    const url =""
    const [email, setEmail] = useState({
        email: ""
    })    

    const fetchEmail = ()=>{
        var recipe = ""
        axios.post(`http://localhost:9090/api/v1/email/signup-email-sent`).then(res =>{ //http://3.14.3.79:9090/api/v1/recipes/
            console.log(res);
            setEmail(res.data);
        });
        

    }

    useEffect(()=>{
        fetchEmail();
    }, [] );

    function home(e) {
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

    return (
        <>
        <Navbar/>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            <div class="container">
                <form onSubmit={(e) => home(e)}>
                    <h2 id="h2">We are glad you Signed Up!</h2>
                    <br/>
                    <h3 id="h2">Check your email to view our greeting!</h3>
                    <br/>
                    <Link to="/" className='btn-mobile'>
                    <button class="button" id="h2">Home</button>
                    </Link>
                </form>
            </div>
        </div>
        </>
    )
}

export default SignUpEmailSent
