import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

function Movie() {
  const [movieList, setMovieList] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const moviesPerPage = 5;

  const getMovie = () => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=2fd4881b94f5b91c9836bf0cfc210312')
      .then(res => res.json())
      .then(json => {
        setMovieList(json.results);
      })
      .catch(err => console.error('Fetch error:', err));
  };

  useEffect(() => {
    getMovie();
  }, []);

  const endOffset = itemOffset + moviesPerPage;
  const currentMovies = movieList.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(movieList.length / moviesPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * moviesPerPage) % movieList.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="p-6">
     
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {currentMovies.map((movie) => (
          <div key={movie.id} className="bg-white shadow-md rounded overflow-hidden">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-auto"
              
            />
            <div className="p-2">
              <h2 className="text-sm font-semibold">{movie.title}</h2>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Add To Cart</button>
            </div>
          </div>
        ))}
      </div>

      
      <div className="mt-8 flex justify-center">
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="Previous"
          renderOnZeroPageCount={null}
          containerClassName="flex gap-2 items-center"
          pageClassName="px-3 py-1 border rounded hover:bg-blue-500 hover:text-white"
          
        />
      </div>
    </div>
  );
}

export default Movie;
