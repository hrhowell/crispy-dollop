import React from 'react'
import AdminNavbar from '../../../AdminNavbar';
import Cards from '../../../cards/Cards';
import Search from '../Search/Search';
import '../../../../App.css';

import './Recipes.css';

function AdminRecipes() {
    return (
       <>
       <div className='recipDiv'>
           
            <AdminNavbar/>
            <Search/>
            <center>
            <Cards/>
            </center>
        </div>
       </>
    )
}

export default AdminRecipes
