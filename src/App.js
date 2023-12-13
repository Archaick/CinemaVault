// useEffect hook to load API when page loads immediately
import { useState, useEffect } from 'react';

import MovieCard from "./MovieCard";
import SearchIcon from './search.svg';
import './App.css';

// Static var
const API_URL = 'https://www.omdbapi.com?apikey=cddd11ef';


const App = () => {

    const [ searchTerm, setSearchTerm ] = useState('');
    // New state
    const [ movies, setMovies ] = useState([]);

    useEffect( () => {
        searchMovies('Lord of the Ring');
    }, []); // Empty dependancy to call it at the start
    
    const searchMovies = async (title) => {
        // Calling API
        const response = await fetch(`${API_URL}&s=${title}`);
        // Getting data
        const data = await response.json();

        setMovies(data.Search);
    }

    // Enter key functionality
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          searchMovies(searchTerm);
        }
      };

    return (
        <div className='app'>
            <h1>Cinema Vault</h1>

            <div className='search'>
                <input 
                    placeholder='Search for Movies'
                    value = {searchTerm}
                    onChange={ (e) => setSearchTerm(e.target.value) }
                    onKeyDown={handleKeyDown} // Handle Enter key press
                />

                <img
                    src={SearchIcon}
                    alt="Search"
                    onClick={ () => searchMovies(searchTerm) }
                />
            </div>

            {movies?.length > 0
                ?  (
                    <div className='container'>
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />  
                        ))}
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>No movies found!</h2>
                    </div>
                )}
        </div>
    );
};

export default App;