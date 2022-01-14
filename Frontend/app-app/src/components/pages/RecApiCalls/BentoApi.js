import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import '../../pages/UtilPages/Profile/UserProfiles.css';

export const BentoIng = ()=> {

   

    const [bentoIng, setBentoIng] = useState([]);

    const fetchBentoIng = ()=>{
        var recipe = "bento";
        const username = sessionStorage.getItem('username');
        sessionStorage.setItem('recipe', recipe);
        axios.get(`http://localhost:9090/api/v1/recipes/${recipe}/${username}`).then(res =>{
            console.log(res);
            setBentoIng(res.data);
        });
        

    }

    useEffect(()=>{
        fetchBentoIng();
    }, [] );

    return bentoIng.map((ingredient, index) =>{
        return (
            <div key={index}>
                
                <h3>Ingredient: {ingredient.ingName}</h3>
               
            </div>
        )
    }); 
}
export default BentoIng;