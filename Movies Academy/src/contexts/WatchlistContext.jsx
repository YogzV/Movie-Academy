import {createContext,useContext,useState,useEffect} from "react"

const WatchlistContext = createContext();

export const useWatchlistContext = () => useContext(WatchlistContext);

export const WatchlistProvider = ({children})=>{
    const [watchMovies,setWatchMovies] = useState([]);
    
    useEffect(()=>{
        const storedWatch = localStorage.getItem('watchMovies');
        if(storedWatch)
            setWatchMovies(JSON.parse(storedWatch));
    },[])

    useEffect(()=>{
        localStorage.setItem('watchMovies',JSON.stringify(watchMovies));
    },[watchMovies])

    const addWatchMovies = (movie) =>{
        
        setWatchMovies(prev => [...prev,movie]);
    }

    const removeWatchMovies = (movieId) =>{
        setWatchMovies(prev => prev.filter((element,_) =>
                         element.id!==movieId))
    }
    

    const isWatchlist =(movieId) =>{
        return watchMovies.some(element => element.id===movieId)
    }

    const value={
        watchMovies,
        addWatchMovies,
        removeWatchMovies,
        isWatchlist
    }

    return <WatchlistContext.Provider value={value}>
            {children}
        </WatchlistContext.Provider>
    
};