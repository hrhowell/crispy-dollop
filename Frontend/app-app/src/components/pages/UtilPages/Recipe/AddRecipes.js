import React from 'react'
import './AddRecipes.css';

import '../../../../App.css';


import Navbar from '../../../Navbar';

import { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate} from 'react-router-dom';

export default function AddRecipes() {
    const [recipesName, setRecipesName] = useState('');
    const [mealType, setMealType] = useState('');
    const [firstIngredients, setFirstIngredients] = useState('');
    const [secondIngredient, setSecondIngredient] = useState('');
    const [thirdIngredient, setThirdIngredient] = useState('');
    const [fourthIngredient, setFourthIngredient] = useState('');
    const [fifthIngredient, setFifthIngredient] = useState('');
    
    const [uData, setUData] = useState("")
    const navigate = useNavigate()


  function submit2(){
     const a = recipesName
     const b = mealType
     const c = firstIngredients
     const d = secondIngredient
     const e = thirdIngredient
     const f = fourthIngredient
     const g = fifthIngredient
      axios.post(`http://localhost:9090/api/v1/recipes/users/add/${a}/${b}/${c}/${d}/${e}/${f}/${g}`)
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
          <div className="main22">
            <div className="sub-main22">
              <div>
                <div>
                  <div>
                  <h1 id="t22">Add Recipe Page</h1>
                  </div>
                 <div className="form">
                 <div className="first-input">
                    <p>Recipe Name</p>
                    <input id="signupinput" type="text" placeholder="Enter recipe name" className="addRecipeInput" onChange={e => setRecipesName(e.target.value)}/>
                  </div>
                  <div className="Meal Type">
                    <p>Meal Type</p>
                    <input id="signupinput" type="text" placeholder="Enter meal type" className="addRecipeInput" onChange={e => setMealType(e.target.value)}/>
                  </div>
                  <div className="third-input">
                    <p>First Ingredient</p>
                    <input id="signupinput" type="text" placeholder="Enter first ingredients" className="addRecipeInput" onChange={e => setFirstIngredients(e.target.value)}/>
                  </div>
                  <div className="forth-input">
                    <p>Second Ingredient</p>
                    <input id="signupinput" type="text" placeholder="Enter second ingredient" className="addRecipeInput" onChange={e => setSecondIngredient(e.target.value)}/>
                  </div>
                  <div className="fith-input">
                    <p>Third Ingredient</p>
                    <input id="signupinput" type="text" placeholder="Enter third ingredient" className="addRecipeInput" onChange={e => setThirdIngredient(e.target.value)}/>
                  </div>
                  <div className="fith-input">
                    <p>Fourth Ingredient</p>
                    <input id="signupinput" type="text" placeholder="Enter fourth ingredient" className="addRecipeInput" onChange={e => setFourthIngredient(e.target.value)}/>
                  </div>
                  <div className="fith-input">
                    <p>Fifth Ingredient</p>
                    <input id="signupinput" type="text" placeholder="Enter fifth ingredient" className="addRecipeInput" onChange={e => setFifthIngredient(e.target.value)}/>
                  </div>
                 </div>
                  <div className="login-button2">
                    <button id="button2" onClick={submit2}>Add Recipe</button>
                  </div>
                  </div>
              </div>
            </div>
            
          </div>
        </>
      );
}

