import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import '../../pages/UtilPages/Profile/UserProfiles.css';

export const OrangeJuiceIng = ()=> {

   

    const [orangeJuiceIng, setOrangeJuiceIng] = useState([]);

    const fetchOrangeJuiceIng = ()=>{
        var recipe = "orange_juice";
        axios.get(`http://localhost:9090/api/v1/recipes/${recipe}`).then(res =>{
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