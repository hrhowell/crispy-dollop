import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//Utilities
import Users from './components/Users';
import Home  from './components/pages/Home';
import Login from './components/pages/Login';
import Logout from './components/pages/Logout';
import SignUp from './components/pages/SignUp';
import UpdateProfile from './components/pages/UpdateProfile';

//MealTypes
import Desserts from './components/pages/meals/Desserts';
import Snacks from './components/pages/meals/Snacks'
import Breakfast from './components/pages/meals/Breakfast';
import Lunch from './components/pages/meals/Lunch';
import Dinner from './components/pages/meals/Dinner';
import Beverages from './components/pages/meals/Beverages';

//Recipies
import Recipes from './components/pages/Recipes';

/*breakfast*/
import Pancakes from './components/pages/recipe_pages/Pancakes';
import Granola from './components/pages/recipe_pages/Granola';
import Toast from './components/pages/recipe_pages/Toast';

/*Lunch*/
import Salad from './components/pages/recipe_pages/Salad';
import Curry from './components/pages/recipe_pages/Curry';
import Bento from './components/pages/recipe_pages/Bento';

/*Dinner*/
import Hamburger from './components/pages/recipe_pages/Hamburger';
import Pasta from './components/pages/recipe_pages/Pasta';
import PadThai from './components/pages/recipe_pages/PadThai';

/*Snacks*/
import CeleryBoat from './components/pages/recipe_pages/CeleryBoat';
import Fruit from './components/pages/recipe_pages/Fruit';
import Hummus from './components/pages/recipe_pages/Hummus';

/*Desserts*/
import LemonTart from './components/pages/recipe_pages/LemonTart';
import Gelato from './components/pages/recipe_pages/Gelato';
import Pavlova from './components/pages/recipe_pages/Pavlova';

/*Beverages*/
import Latte from './components/pages/recipe_pages/Latte';
import BobaTea from './components/pages/recipe_pages/BobaTea';
import OrangeJuice from './components/pages/recipe_pages/OrangeJuice';
import Punch from './components/pages/recipe_pages/Punch';



function App() {
  return (
    
    <>
    <Router>
    
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="users" element ={<Users/>}/>
        <Route path ="/login" element={<Login/>}/>
        <Route path ="/update" element={<UpdateProfile/>}/>
        <Route path ="/sign-up" element={<SignUp/>}/>
        <Route path ="/logout" element={<Logout/>}/>
        <Route path ="/recipes" element={<Recipes/>}/>
        <Route path ="/breakfast" element={<Breakfast/>}/>
        <Route path ="/lunch" element={<Lunch/>}/>
        <Route path ="/dinner" element={<Dinner/>}/>
        <Route path ="/beverages" element={<Beverages/>}/>
        <Route path ="/dessert" element={<Desserts/>}/>
        <Route path ="/snacks" element={<Snacks/>}/>
        <Route path ="/pancakes" element={<Pancakes/>}/>
        <Route path ="/granola" element={<Granola/>}/>
        <Route path ="/toast" element={<Toast/>}/>
        <Route path ="/bento" element={<Bento/>}/>
        <Route path ="/salad" element={<Salad/>}/>
        <Route path ="/curry" element={<Curry/>}/>
        <Route path ="/hamburger" element={<Hamburger/>}/>
        <Route path ="/pasta" element={<Pasta/>}/>
        <Route path ="/padthai" element={<PadThai/>}/>
        <Route path ="/celery-boats" element={<CeleryBoat/>}/>
        <Route path ="/hummus" element={<Hummus/>}/>
        <Route path ="/fruit-stars" element={<Fruit/>}/>
        <Route path ="/lemon-tart" element={<LemonTart/>}/>
        <Route path ="/gelato" element={<Gelato/>}/>
        <Route path ="/pavlova" element={<Pavlova/>}/>
        <Route path ="/latte" element={<Latte/>}/>
        <Route path ="/boba-tea" element={<BobaTea/>}/>
        <Route path ="/orange-juice" element={<OrangeJuice/>}/>
        <Route path ="/punch" element={<Punch/>}/>


        

       
        

      </Routes>
    </Router>
    </>
   
  );
}

export default App;
