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

export function AdminNavbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [admfx, setAdmfx] = useState(false);
    const [userfx, setUserfx] = useState(false);
    const [adm, setAdm] = useState(false);
    const [log, setLog] = useState(false);
    const closeMobileMenu = ()=> setClick(false);
    const handleClick= ()=> setClick(!click);

    const showButton = ()=>{
        if(window.innerWidth <=960){
            setButton(false)
        }else {
            setButton(true);
        }
    };

    // const showUserFx = ()=>{
    //     if(userName ==="ADMIN"){
    //         setIsAdmin(true);
    //         setIsLoggedIn(true);
    //         setButton(false);
    //         setAdm(true);
    //         setLog(true);
    //         const admfx = document.getElementById("adm");
    //         const userfx = document.getElementById("log");
    //         admfx.style.display = "visible";
    //         userfx.style.display = "visible";

    //     }else if(userName !=null){
    //         setIsLoggedIn(true);
    //         setButton(false);
    //         setLog(true);
    //         const userfx = document.getElementById("log");
    //         userfx.style.display = "visible";

    //     }else{
    //         setIsLoggedIn(false);
    //         setIsAdmin(false);
    //         setButton(true);
    //         setAdm(false);
    //         setLog(false);
    //         const admfx = document.getElementById("adm");
    //         const userfx = document.getElementById("log");
    //         admfx.style.display = "hidden";
    //         userfx.style.display = "hidden";

    //     }
    // }

    
    useEffect(()=> {
        showButton();
    },[]);

    window.addEventListener('resize', showButton);
    // window.addEventListener('storage', showUserFx);
    const userName = sessionStorage.getItem('name')

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                
                
                 <Link to="/" id='ThymeCrunch'className='navbarLogo' onClick={closeMobileMenu}>
                  ThymeCrunch  
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

                    <li id="log" className='nav-item'>
                        <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
                           Profile
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/recipes' className='nav-links' onClick={closeMobileMenu}>
                            Recipes
                        </Link>
                    </li>

                    <div id="log" class="dropdown">
                    <button class="dropbtn">Recipes</button>
                    <div class="dropdown-content">
                        <a  href="/recipes">Recipe</a>
                        <a  href="/user-recipes">User Recipes</a>
                        <a  href="add-recipes">Add Recipes</a>
                        <a  id = "adm" href="pending-recipes">Pending Recipes</a>
                    </div>
                    </div>
                     {/* added html */}
                    <li id="log" className='nav-item'>
                        <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                           Login
                        </Link>
                    </li>
                    <li id="log" className='nav-item'>
                        <Link to='/logout' className='nav-links' onClick={closeMobileMenu}>
                           Logout
                        </Link>
                    </li>
                    <li id="log" className='nav-item'>
                        <Link to='/update' className='nav-links' onClick={closeMobileMenu}>
                            Update 
                        </Link>
                    </li>
                </ul>
                {button && <Button id="log" buttonStyle='btn--outline'>SIGN UP</Button>}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/" className='navbarLogo' onClick={closeMobileMenu}>
                  Hi, {userName} 
                </Link>
            </div>
        </nav>
        </>
    )
}

export default AdminNavbar;
