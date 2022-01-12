import React from 'react'
import Navbar from '../../Navbar';
import '../../../App.css'
import BeveragesCards from '../../cards/BeveragesCards';
import BerSearch from '../UtilPages/Search/BerSearch';
import { RecipeButton } from '../../buttons/RecipeButton';

function Beverages() {
    return (
        <>
        <Navbar/>
        <BerSearch/>
        <BeveragesCards/>
        <RecipeButton/>
        </>
    )
}

export default Beverages;