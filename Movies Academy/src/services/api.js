const API_KEY = "f9c290da604500a03a95ed3ad6b0b9bc";
const BASE_URL = "https://api.themoviedb.org/3";

export const popularMovies = async ()=>{
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const res = await response.json();
    return res.results;
} 

export const searchMovies = async (title)=>{
    
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(title)}`);
    const json = await response.json();
    return json.results;
}
