import { useWatchlistContext } from "./contexts/WatchlistContext";
import RenderMovies from "./RenderMovies"
import {Link} from "react-router-dom"

 function WatchList(){

     const {watchMovies} = useWatchlistContext();
     
     const renderWatchMovies = watchMovies.map((movie,index) =>{
          return <RenderMovies key={index} movie={movie} />
     });
    
     

    return(
        <div>
            <h1 id="heading">Watchlist</h1>
            <div className="menu-container">
                <a href="./" ><h3>Home</h3></a>
                <a href="./Favorites"  ><h3>Recently Liked</h3></a>
                <a href="./Watchlist" ><h3>Watchlist</h3></a>
            </div>
            <div className="render-movies">
                    {renderWatchMovies}
            </div>
        </div>
    )

}

export default WatchList;