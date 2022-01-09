import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import '../utilpages/UserProfiles.css';

export const OrangeJuiceIng = ()=> {

   

    const [orangeJuiceIng, setOrangeJuiceIng] = useState([]);

    const fetchOrangeJuiceIng = ()=>{
        var recipe = "orange_juice";
        axios.get(`http://localhost:9090/api/v1/ingredients/recipes/${recipe}`).then(res =>{ //http://3.14.3.79:9090/api/v1/recipes/
            console.log(res);
            setOrangeJuiceIng(res.data);
        });
        

    }

    useEffect(()=>{
        fetchOrangeJuiceIng();
    }, [] );

    return orangeJuiceIng.map((ingredient, index) =>{
        return (
            <div key={index}>
                <h3>Ingredient: {ingredient.ingName}</h3>
               
            </div>
        )
    }); 
}