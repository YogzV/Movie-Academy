import {popularMovies,searchMovies} from "./services/api.js"
import {useEffect,useState} from "react"
import  RenderMovies from "./RenderMovies.jsx"
import {Link} from "react-router-dom"


function MovieComponent(){
    
    const [movies,setMovies] = useState([]);
    const [query,setQuery] = useState("");
    

    useEffect(() =>{
        
        const loadMovies = async ()=>{
            try{
            const result = await popularMovies();
            const response = result.filter(movies => movies.poster_path!==null);
            setMovies(response);
            
        }
        catch(error)
            {
              console.log(error);
        }
        
    }
        loadMovies();
    },[]);

    function handleChange(event)
    {
        const value =event.target.value;
        setQuery(value);
    }

    function handleKeyPress(event){
       if(event.key === "Enter")
       {
        handleSearch(query);
       }
    }

    const handleSearch = async (query)=>{
        if(query.trim()!=="")
        {
        const result = await searchMovies(query);
        const response = result.filter(movies => movies.poster_path!==null);
        setMovies(response);
        }
    }

   


    var renderMovies = movies.map((movie,index) =>
                        <RenderMovies key={index} movie={movie}/>    
    )

    return(
        <div>
            
            <div className="header-container">
                <h1 id="heading">Movies Academy</h1>
                <input className="header-search" onKeyDown={handleKeyPress} onChange={handleChange} type="text" placeholder="Search Movies" />
                <button onClick={() => handleSearch(query)} className="header-btn" >Search</button>
            </div>

            <div className="menu-container">
                <a href="./" ><h3>Home</h3></a>
                <a href="./Favorites" ><h3>Recently Liked</h3></a>
                <a href="./Watchlist"  ><h3>Watchlist</h3></a>
            </div>

            <div className="render-movies">   
                {renderMovies}  
            </div>

        </div>
    )
}

export default MovieComponent;