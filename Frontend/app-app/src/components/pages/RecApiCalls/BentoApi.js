import axios from "axios";
import React, {useState, useEffect, useCallback}from "react"
import '../../UserProfiles.css'

export const BentoIng = ()=> {

   

    const [bentoIng, setBentoIng] = useState([]);

    const fetchBentoIng = ()=>{
        axios.get("http://localhost:9090/api/v1/recipes/meals/lunch/bento").then(res =>{
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
                <p>User ID: {ingredient.ingName}</p>
               
            </div>
        )
    }); 
}
export default BentoIng;