import React from 'react'
import Navbar from '../../Navbar'
import '../../../App.css'
import BreakfastCards from '../../cards/BreakfastCards';
import DerSearch from '../UtilPages/Search/DerSearch';
import { RecipeButton } from '../../buttons/RecipeButton';

function Breakfast() {
    return (
        <>
        <Navbar/>
        <DerSearch/>
        <BreakfastCards/>
        <RecipeButton/>
        </>
    )
}

export default Breakfast
