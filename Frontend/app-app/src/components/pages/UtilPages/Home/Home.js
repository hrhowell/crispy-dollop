import '../../../../App.css';
import VideoSection from '../../../videos/VideoSection';
// import Navbar from '../..//../Navbar';
import FirstNavbar from '../../../FirstNavbar';
import AdminNavbar from '../../../AdminNavbar';

function Home(){
    return (
        <>
        {/* <Navbar/> */}
        {/* <AdminNavbar/> */}
        <FirstNavbar/>
        <VideoSection/>
        </>
    )
}
export default Home;