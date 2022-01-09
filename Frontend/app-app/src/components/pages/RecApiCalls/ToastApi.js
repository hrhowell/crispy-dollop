import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import '../utilpages/UserProfiles.css';

export const ToastIng = ()=> {

   

    const [toastIng, setToastIng] = useState([]);

    const fetchToastIng = ()=>{
        var recipe = "toast";
        axios.get(`http://localhost:9090/api/v1/ingredients/recipes/${recipe}`).then(res =>{ //http://3.14.3.79:9090/api/v1/recipes/
            console.log(res);
            setToastIng(res.data);
        });
        

    }

    useEffect(()=>{
        fetchToastIng();
    }, [] );

    return toastIng.map((ingredient, index) =>{
        return (
            <div key={index}>
                <h3>Ingredient: {ingredient.ingName}</h3>
               
            </div>
        )
    }); 
}