import React from 'react'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'
const MovieList = ({title, movies}) => {
    
    console.log(title)
    console.log(movies)
   
  return (
    <div>
        <div> 
            <h1>{title}</h1>
            <div> 
                 {/* {movies.map((movies)=> <MovieCard posterPath={movies?.poster_path} />)} */}
                 <MovieCard posterPath={movies?.poster_path} />
               
                 </div>
        </div>
    
    </div>
  )
}

export default MovieList
