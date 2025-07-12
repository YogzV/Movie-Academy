import {useMovieContext} from "./contexts/Moviecontext.jsx"
import {useWatchlistContext} from "./contexts/WatchlistContext.jsx"

function RenderMovies(props){
    
    const{isFavorite,addFavorite,removeFavorite} = useMovieContext();
    
    const favorite = isFavorite(props.movie.id);

    function handleLike(movie){
        
       if(favorite)
       {
        removeFavorite(movie.id);
       }else{
        addFavorite(movie);
       }
    }

    const {isWatchlist,addWatchMovies,removeWatchMovies} = useWatchlistContext();

   const watchlist = isWatchlist(props.movie.id);
   
   function handleWatch(movie){

          if(watchlist){ 
            removeWatchMovies(movie.id);
           }else{
            
            addWatchMovies(movie);
           }
   }

 

  return(
        <div className="img-container">
            <button className={`movie-watch ${watchlist? "active":"inactive"}`} title={watchlist? "Remove from watchlist":"Add to watchlist"} onClick={()=> handleWatch(props.movie)}>&#128065;</button>
            <button className ={`movie-like ${favorite? "active":"inactive"}`} title={favorite? "Remove from Liked":"Add to Liked"} onClick={() => handleLike(props.movie)}>&hearts;</button>
            <img className="movie-img" src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} />
            <span className="movie-title">{props.movie.title}</span>
            <span className="movie-year">{props.movie.release_date.split("-")[0]}</span>
        </div>
  )
}

export default RenderMovies;