import axios from "../../axios";
import { useEffect, useState } from "react";
import './Row.css';

function Row({title,fetchUrl,isLargeRow=false}){
    const [movies, setMovies] = useState([]);

    const base_url ='https://image.tmdb.org/t/p/original/';
    useEffect(()=> {
        async function fetchData(){
            const request= await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);

    return(
        <div className="row">
             <div className="row_posters">
                {movies.map((movie) => (
                <img 
                    key={movie.id}
                    className= {`row_poster ${isLargeRow && "row__posterLarge"}`}
                    src={`${base_url}${isLargeRow? movie.poster_path: movie.backdrop_path}`}
                    alt={movie.name}
                />
                ))}
            </div>
        </div>
    );
}

export default Row;