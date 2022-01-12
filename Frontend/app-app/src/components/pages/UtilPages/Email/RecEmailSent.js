import React, { useEffect, useState } from "react";
import axios from'axios';
import { Link } from 'react-router-dom';

function RecEmailSent() {
    const url =""
    const [recipe, setRecipe] = useState([]);
    const [email, setEmail] = useState({
        email: ""
    })    

    const fetchEmail = ()=>{
        var recipe = ""
        axios.post(`http://localhost:9090/api/v1/email/recipe-email-sent/${recipe}`).then(res =>{ //http://3.14.3.79:9090/api/v1/recipes/
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
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            <div class="container">
                <form onSubmit={(e) => submit(e)}>
                    <h2 id="h2">We are glad you like this recipe!</h2>
                    <br/>
                    <h3 id="h2">Enter your email below and we will send you your recipe.</h3>
                    <br/>
                    <label id="h2">Email:</label>
                    <input onChange={(e)=>handle(e)} id="email" value={email.email} placeholder="email" type="text" required></input>
                    <br/>
                    <br/>
                    <Link to="/recipes" className='btn-mobile'>
                    <button class="button" id="h2">Submit</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default RecEmailSent
