import React, { useEffect, useState } from "react";
import axios from'axios';
import Navbar from '../../../Navbar';
import './PasswordRecovery.css';

function PasswordRecovery() {
    const url =""
    const [email, setEmail] = useState({
        email: ""
    })

    const fetchEmail = ()=>{
        var recipe = ""
        axios.post("http://localhost:9090/api/v1/email/email-sent").then(res =>{ //http://3.14.3.79:9090/api/v1/recipes/
            console.log(res);
            setEmail(res.data);
        });


    }

    useEffect(()=>{
        fetchEmail();
    }, [] );

    function submit(e) {
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
         <div class="fullpage">
            <div class="container">
                <form onSubmit={(e) => submit(e)}>
                    <h2 id="h2">Did you lose something?</h2>
                    <br/>
                    <h3 id="h2">Enter your email below and we will send you your password.</h3>
                    <br/>
                    <label id="h2">Email:</label>
                    <input onChange={(e)=>handle(e)} id="email" value={email.email} placeholder="email" type="text" required></input>
                    <br/>
                    <br/>
                    <button class="button" id="h2">Submit</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default PasswordRecovery