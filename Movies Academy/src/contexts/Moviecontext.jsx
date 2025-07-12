import { createContext,useState,useEffect,useContext} from "react";

const MovieContext = createContext();

export const useMovieContext = ()=> useContext(MovieContext);

export const MovieProvider =({children}) =>{
    
    const [favorites,setFavorites] = useState([]);

    useEffect(()=>{
        const storedFavs = localStorage.getItem('favorites')
        if(storedFavs && storedFavs!=="undefined")
        {
            setFavorites(JSON.parse(storedFavs));
        }
    },[]);

    useEffect(()=>{
         localStorage.setItem('favorites',JSON.stringify(favorites));
         
    },[favorites]);

    const addFavorite =(movie)=>{
        setFavorites(prev => [...prev,movie]);
    };

    const removeFavorite = (movieId)=>{
           setFavorites(prev => {
            const fav = prev.filter(element => element.id!=movieId);
            return fav;
    })
   };

    const isFavorite = (movieId)=>{
    
      return favorites.some(element => element.id===movieId);
     
    };

    const value={
        isFavorite,
        addFavorite,
        removeFavorite,
        favorites
    }

    return(
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    )
}