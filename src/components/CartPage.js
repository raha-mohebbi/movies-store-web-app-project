import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import { ToastContainer } from 'react-toastify';

function CartPage() {
const cart = useSelector((state) => state.cart.items);

return (
  <Fragment>
    <div className="p-6 min-h-screen bg-purple-50 dark:bg-gray-900 transition-colors duration-300">
      <h1 className="text-3xl font-bold text-purple-700 dark:text-purple-300">Your Cart</h1>

      <div className="mt-6">
        {cart.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {cart.map((movie, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-purple-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-auto"
                />
                <div className="p-4 space-y-2">
                  <h2 className="text-md font-semibold text-purple-800 dark:text-purple-200">
                    {movie.title}
                  </h2>
                  <span className="px-2 py-1 text-purple-800 font-bold">{movie.quantity}</span>



                  <MovieCard movie={movie} />
                  <ToastContainer position="top-right" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-purple-600 dark:text-purple-300">Your Cart Is Empty</p>
        )}
      </div>
    </div>
  </Fragment>
);
}

export default CartPage;
