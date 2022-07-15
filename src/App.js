import React from 'react';
import MovieCard from './MovieCard';
import './App.css'
import SearchIcon from './search.svg'

import { useEffect } from 'react';
import { useState } from 'react';

const API_URL = 'https://omdbapi.com?apikey=d82ed42b';



const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    searchMovies('Batman');
  }, []);


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }
 
  
  return (

    <div className="app">
      <h1>FilmSurf</h1>
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for films"
          />
          
          
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
            />

         </div>

         {movies?.length > 0 ? (
            <div className="container">
              {movies.map((movie) => (
              <MovieCard movie={movie} />))}
            </div>
            ) : (
              <div className="empty"> 
                <h2>No Movies Found</h2>
              </div>
            )}
         
    </div>
    
  );
};


export default App;
