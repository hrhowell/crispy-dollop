import axios from "axios";
import React, {useState, useEffect}from "react";
import Navbar from "../../../Navbar"
import './ShopingList.css';
import {ShoppingListConst} from "./ShoppingIngApi";

function ShopingList(){
    const [userEmail, setUserEmail] = useState('');

    function submitList(){
        const a = userEmail
        const  b = sessionStorage.getItem('username')
         axios.post(`http://localhost:9090/api/v1/email/soppinglist-email-sent/${a}/${b}`)
           .then(response =>{
             const userList = response.data;
             console.log.apply(userList)
             
           })
           .catch(err => {
               console.log("Error occured", err);
           })
     }
   
 return(
   <>
    <Navbar/>
    <div id="body">
        <div id="main">
            <div className="container">
            <div id="groceries">
                <div id="title">
                <h2>Shopping List</h2>
                </div>
                <div id="input">
                <i id="pencil" class="fas fa-pencil-alt"></i>
                <input id="user_input" placeholder="Add item"/>
                </div>
                <div id="all_items">
                <ShoppingListConst/>            
                </div>
                <br/>
                <br/>
                <div id="Shoping-button">
                    <input  id="shoppingEmail"type='email' placeholder="Enter your email" onChange={e => setUserEmail(e.target.value)}></input>
                    <button id="button1" onClick={submitList}>Send Email</button>
                </div>
                </div>
            </div>
            </div>
        </div>
   </>
)
 }

 export default ShopingList;