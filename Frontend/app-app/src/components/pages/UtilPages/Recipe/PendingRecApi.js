import axios from "axios";
import React, {useState, useEffect}from "react";
// import {useDropzone} from 'react-dropzone';
import './PendingRecipes.css';


export const PendingRecipesConst = ()=> {

    const [recID, setRecID] = useState('');
    const [status, setStatus] = useState('');
    const [userRecipes, setUserRecipes] = useState([]);
    

    const fetchUserRecipes = ()=>{
        axios.get("http://localhost:9090/api/v1/recipes/users/pending").then(res =>{ //http://3.14.3.79:9090/api/v1/users
            console.log(res);
            setUserRecipes(res.data);
        });
        

    }

    useEffect(()=>{
        fetchUserRecipes();
    }, [] );



    function statusFun(){
      
         axios.post( `http://localhost:9090/api/v1/recipes/users/approve-deny/${recID}/${status}`)
           .then(response =>{
              
             })
           .catch(err => {
               console.log("Error occured", err);
           })
        }
  

    return userRecipes.map((recipe, index) =>{
        return (
            <div id="pendingId"key={index}>
             
                 <table className="bigTeble">
                <thead>
                <tr className='headerRow'>
                    <td className='headerCol'>
                        ID
                    </td>
                    <td className='headerCol'>
                        Recipe Name
                    </td>
                    <td className='headerCol'>
                        Meal Type
                    </td>
                    <td className='headerCol'>
                        First Ingredient
                    </td>
                    <td className='headerCol'>
                        Second Ingredient
                    </td>
                    <td className='headerCol'>
                        Third Ingredient
                    </td>
                    <td className='headerCol'>
                        Fourth Ingredient
                    </td>
                    <td className='headerCol'>
                        Fifth Ingredient
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr className="bodyRow">
                    <td>{recipe.recID}</td>
                    <td className='bodyCol'>
                    <p>{recipe.recName}</p>
                    </td>
                    <td className='bodyCol'>
                        <p>{recipe.mealType}</p>
                    </td>
                    <td className='bodyCol'>
                    <p> {recipe.ing1}</p>
                    </td>
                    <td className='bodyCol'>
                    <p> {recipe.ing2}</p>
                    </td>
                    <td className='bodyCol'>
                    <p> {recipe.ing3}</p>
                    </td>
                    <td className='bodyCol'>
                    <p> {recipe.ing4}</p>
                    </td>
                    <td className='bodyCol'>
                    <p> {recipe.ing5}</p>
                    </td>
                </tr>
                
            </tbody>
                </table>

                <div>
                <input className= "pendingInput" id="recIdPending" name="recIdPending" type="text" placeholder='recipeID' onChange={e => setRecID(e.target.value)}></input>&nbsp;&nbsp;
                <input className= "pendingInput" id="status" name="status" type="text" placeholder='approve or deny'  onChange={e => setStatus(e.target.value)}></input>
                 <button className= "pendingInput" id ="statusButton"type="button" onClick={statusFun()}>Submit Status</button>
                </div>
            </div>
        )
    }); 

  
}
