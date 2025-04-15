import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/CartSlice';
import Loading from './loader';

function Movie() {
  const [movieList, setMovieList] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const moviesPerPage = 5;

  const showToastMessage = () => {
    toast.success("Movie added to cart!", {
      position: "top-right"
    });
  };

  const getMovie = () => {
    setLoading(true);

    setTimeout(() => {
      fetch('https://api.themoviedb.org/3/discover/movie?api_key=2fd4881b94f5b91c9836bf0cfc210312')
        .then(res => res.json())
        .then(json => {
          setMovieList(json.results);
          setLoading(false);
        })
        .catch(err => {
          console.error('Fetch error:', err);
          setLoading(false);
        });
    }, 1000);
  };

  useEffect(() => {
    getMovie();
  }, []);

  const filteredMovies = movieList.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  const endOffset = itemOffset + moviesPerPage;
  const currentMovies = filteredMovies.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredMovies.length / moviesPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * moviesPerPage) % filteredMovies.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="p-6 min-h-screen bg-purple-50 dark:bg-gray-900 transition-colors duration-300">
      <ToastContainer />
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-4 sm:mb-0">Movies</h1>
            <div className="flex w-full sm:w-auto">
              <input
                className="border border-gray-300 rounded px-4 py-2 w-full sm:w-60 bg-slate-900 text-white"
                type="text"
                placeholder="Search Movie"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                type="submit"
                className="p-3 ms-1 text-sm font-medium text-white bg-purple-700 rounded-lg border border-black-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
              >
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {currentMovies.map((movie) => (
              <div key={movie.id} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-purple-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-auto"
                />
                <div className="p-4">
                  <h2 className="text-md font-semibold text-purple-800 dark:text-purple-200 mb-5 px-4">{movie.title}</h2>
                  <button
                    onClick={() => {
                      dispatch(addToCart(movie));
                      showToastMessage();
                    }}
                    className="bg-purple-600 hover:bg-purple-800 text-white font-semibold py-1.5 px-4 rounded-full w-full transition"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <ReactPaginate
              breakLabel="..."
              nextLabel="Next"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="Previous"
              renderOnZeroPageCount={null}
              containerClassName="flex gap-2 items-center"
              pageClassName="px-3 py-1 border border-purple-300 rounded text-purple-700 dark:text-purple-200 dark:border-gray-600 hover:bg-purple-600 hover:text-white transition"
              activeClassName="bg-purple-700 text-white"
              previousClassName="px-3 py-1 rounded border border-purple-300 dark:border-gray-600 hover:bg-purple-500 hover:text-white"
              nextClassName="px-3 py-1 rounded border border-purple-300 dark:border-gray-600 hover:bg-purple-500 hover:text-white"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Movie;
