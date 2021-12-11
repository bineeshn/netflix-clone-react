import Banner from "./UI/Banner";
import NavBar from "./UI/NavBar";
import Row from"./UI/Row";
import requests from '../Requests';


function HomeScreen(){
    return (
        <div className="homeScreen">
            <NavBar/>
            <Banner/>
            <Row title="NETFLIX'S ORIGINALS"  fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
            <Row title="Trending Now"  fetchUrl={requests.fetchTrending}/>
            <Row title="Top Rated"  fetchUrl={requests.fetchTopRated}/>
            <Row title="Action Movies"  fetchUrl={requests.fetchActionMovies}/>
        </div>
    )
}

export default HomeScreen;