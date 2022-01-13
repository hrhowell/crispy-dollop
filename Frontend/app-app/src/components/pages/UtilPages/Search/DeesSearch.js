import React, { Component } from 'react'
import './Search.css';
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate} from 'react-router-dom';

export default function DeesSearch() {

    const [recipes, setRecipes] = useState('');

    const [uData, setUData] = useState("")
    const navigate = useNavigate()


  function submit0(){
     const a = recipes
      axios.post(`http://3.14.3.79:9090/api/v1/recipes/all-recipes/${a}/`)
        .then(response =>{
        //   if(response.data ==="true" ) { navigate(`/${recipes}`);}
            if(response.data ===true) { navigate(`/${recipes}`);}
            console.log(response.data);

        })
        .catch(err => {
            console.log("Error occured", err);
        })
       

  }
     return (
         <>
         <h1 id="h1">Desserts</h1>
            <div className='ui_search'>
                <div className='ui_icon_input'>
                    {/* <i class="fa fa-search" aria-hidden="true"></i> */}
                    <i class="fas fa-search"></i>
                    <input type="text" placeholder='Search a Desserts' className='prompt' onChange={e => setRecipes(e.target.value)} />
                    <button id="serbutton"onClick={submit0}>Login</button>
                </div>
            </div> 
         </>
            
     )
  
}
