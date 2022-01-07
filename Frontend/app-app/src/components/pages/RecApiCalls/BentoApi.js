import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import '../../UserProfiles.css'

export const BentoIng = ()=> {

   

    const [bentoIng, setBentoIng] = useState([]);

    const fetchBentoIng = ()=>{
        var recipe = "bento";
        axios.get(`http://localhost:9090/api/v1/recipes/${recipe}`).then(res =>{ //http://3.14.3.79:9090/api/v1/recipes/
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