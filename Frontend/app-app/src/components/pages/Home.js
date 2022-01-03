import '../../App.css';
import UserProfiles  from './UserProfiles';
import VideoSection from '../VideoSection';
import Cards from '../Cards'
import Navbar from '../Navbar';

function Home(){
    return (
        <>
        <Navbar/>
        
        <VideoSection/>
        <Cards />

        </>
    )
}
export default Home;