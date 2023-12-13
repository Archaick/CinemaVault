// New react componenet, JSX is preferable

import React from 'react';

// New component
// destructure props, object destructioning. 
// Use object destructure movie1 inside curly braces

const MovieCard = ({ movie }) => {
    return (
    <div className='movie'>
        <div>
            <p>{movie.Year}</p>
        </div>
        <div>
            {/* N/A specific to this API */}
            <img src={ movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}/>
        </div>
        <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
        </div>
    </div>
    )
}

export default MovieCard;