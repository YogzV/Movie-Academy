import MovieComponent from "./MovieComponent.jsx"
import {Routes,Route} from "react-router-dom"
import {MovieProvider} from "./contexts/Moviecontext.jsx"
import {WatchlistProvider} from "./contexts/WatchlistContext.jsx"
import Favorites from "./Favorites.jsx"
import WatchList from "./WatchList.jsx"


function App() {

  return(
    <WatchlistProvider>
      <MovieProvider>
          <main>
              <Routes>
                  <Route path="/" element={<MovieComponent />} />  
                  <Route path="/Favorites" element={<Favorites />} />  
                  <Route path="/Watchlist" element={<WatchList />} />                       
              </Routes>
          </main>
      </MovieProvider>
    </WatchlistProvider>
  );
}


export default App;
