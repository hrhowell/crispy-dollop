import React from 'react'
import FirstNavbar from '../../../FirstNavbar';
import Cards from '../../../cards/Cards';
import Search from '../../UtilPages/Search/Search';
import '../../../../App.css';

import './Recipes.css';




function Recipes() {
    const username = sessionStorage.getItem('name')
    
  
    return (
       <>
       <div className='recipDiv'>
           
            <FirstNavbar/>
            
            <Search/>
            <center>
            <Cards/>
            </center>

        </div>
       </>
    )
}

export default Recipes
