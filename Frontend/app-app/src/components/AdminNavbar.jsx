import React, {useState, useEffect}from 'react';
import {Link} from 'react-router-dom';
import './FirstNavbar.css';
import {Button} from './buttons/Button';
import{AddRecipes} from './pages/UtilPages/Recipe/AddRecipes'
import{PendingRec} from './pages/UtilPages/Recipe/PendingRec'
import{UserRecipes} from './pages/UtilPages/Recipe/UserRecipes'
// import{UserRecipes} from './pages/UtilPages/Recipe/UserRecipes'

/**********************************Works Cited************************************
 * Title: React Website Tutorial - Beginner React JS Project Fully Responsive
 * Author: Brian Design 
 * Date: 8/11/20 (Accessed 1/1/22)
 * Code Version: React
 * Availability: https://youtu.be/I2UBjN5ER4s
 *********************************************************************************/

export function FirstNavbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const closeMobileMenu = ()=> setClick(false);
    const handleClick= ()=> setClick(!click);

    const showButton = ()=>{
        if(window.innerWidth <=960){
            setButton(false)
        }else {
            setButton(true);
        }
    };

    
    useEffect(()=> {
        showButton();
    },[]);

    window.addEventListener('resize', showButton);
    const userName = sessionStorage.getItem('name')

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                
                <Link to= "/" className='navbarLogo'>
                    <img id="ourlogo" src={require('.//images/thymecrunchlogowhite.jpg')}
                    alt='logo' />
                </Link>

                <Link to="/" className='navbarLogo' onClick={closeMobileMenu}>
                  Hi, {userName} 
                </Link>
                
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}/>
                </div>
                <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/users' className='nav-links' onClick={closeMobileMenu}>
                            All Users
                        </Link>
                    </li>
                    {/* <li className='nav-item'>
                        <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
                           Profile
                        </Link>
                    </li> */}
                    {/* <li className='nav-item'>
                        <Link to='/recipes' className='nav-links' onClick={closeMobileMenu}>
                            Recipes
                        </Link>
                    </li> */}

                   
                     <div class="dropdown">
                    <button class="dropbtn">Recipes</button>
                    <div class="dropdown-content">
                        <a href="/recipes">Recipe</a>
                        <a href="/user-recipes">User Recipes</a>
                        <a href="add-recipes">Add Recipes</a>
                        <a href="pending-recipes">Pending Recipes</a>
                    </div>
                    </div>
                     {/* added html */}
                    {/* <li className='nav-item'>
                        <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                           Login
                        </Link>
                    </li> */}
                    <li className='nav-item'>
                        <Link to='/logout' className='nav-links' onClick={closeMobileMenu}>
                           Logout
                        </Link>
                    </li>
                    {/* <li className='nav-item'>
                        <Link to='/update' className='nav-links' onClick={closeMobileMenu}>
                            Update 
                        </Link>
                    </li> */}
                </ul>
                {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                <Link to="/" className='navbarLogo' onClick={closeMobileMenu}>
                  Hi, {userName} 
                </Link>
            </div>
        </nav>
        </>
    )
}

export default FirstNavbar
