import React from 'react'
import Navbar from '../../Navbar'
import '../../../App.css'
import SnacksCards from '../../cards/SnacksCards';
import SnSearch from '../UtilPages/Search/SnSearch';
import { RecipeButton } from '../../buttons/RecipeButton';
function Snacks() {
    return (
        <>
        <Navbar/>
        <SnSearch/>
        <SnacksCards/>
        <RecipeButton/>
        </>
    )
}

export default Snacks
