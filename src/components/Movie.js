import React, { useEffect, useState } from 'react'

 function Movie() {
    const [movieList,setMovieList]=useState([])
    const getMovie=()=>{
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=2fd4881b94f5b91c9836bf0cfc210312')
        .then(res => res.json())
        .then(json => {
          console.log(json.results); 
          setMovieList(json.results); 
        })
        .catch(err => console.error('Fetch error:', err));
    };
  
    useEffect(()=>{
        getMovie()
    },[])
    console.log(movieList)
  return (
    <div>
        {movieList.map((movie)=>(
<img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} key={movie.id}/>
       ))}
    </div>
  )
}
export default Movie;

