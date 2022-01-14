import axios from "axios";
import React, {useState, useEffect}from "react"


export const ShoppingListConst = ()=> {

    const [shoppingList, setShoppingList] = useState([]);
    
    // const username = 'zmzere';
                
        const fetchShoppingList = ()=>{
            const username = sessionStorage.getItem('username');
            axios.get(`http://localhost:9090/api/v1/shopinglist/${username}`).then(res =>{ //http://3.14.3.79:9090/api/v1/users
                console.log(res);
                setShoppingList(res.data);
            });
        }
    

    useEffect(()=>{
        fetchShoppingList();
    }, [] );

    return shoppingList.map((ingredient, index) =>{
        return (
            <div key={index}>
                
                <h4> {ingredient.ingredientName}</h4>
               
            </div>
        )
    }); 
}
export default ShoppingListConst;