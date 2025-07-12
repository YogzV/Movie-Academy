import {useMovieContext} from "./contexts/Moviecontext.jsx"
import RenderMovies from "./RenderMovies.jsx"
import {Link} from "react-router-dom"

function Favorites(){
    
    const {favorites} = useMovieContext();

    const renderFavMovies = favorites.map((movie,index) =>
        <RenderMovies key={index} movie={movie}/>    
)


    return(
        <div>
            <h1 id="heading">Liked Movies</h1>
            <div className="menu-container">
                <a href="./" ><h3>Home</h3></a>
                <a href="./Favorites" ><h3>Recently Liked</h3></a>
                <a href="./Watchlist" ><h3>Watchlist</h3></a>
            </div>
            <div className="render-movies">
                {renderFavMovies}   
            </div>
        </div>
    )
}

export default Favorites;