import { useDispatch } from 'react-redux';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearAll,
} from '../features/CartSlice';
import { toast } from 'react-toastify';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(movie.id));
    toast.success('Movie removed from cart !');
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(movie.id));
    toast.info('Movie quantity decreased');
  };

  const handleIncrease = () => {
    dispatch(increaseQuantity(movie.id));
    toast.info('Movie quantity increased');
  };

  const handleClearAll = () => {
    dispatch(clearAll(movie.id));
    toast.error('All items cleared from the cart !');
  };

  return (
    <div className="flex flex-col gap-4 mt-2 sm:flex-row sm:gap-6">
      <button
        className="bg-red-600 hover:bg-red-800 text-white px-3 py-2 rounded w-full sm:w-auto"
        onClick={handleRemove}
      >
        Remove Movie
      </button>

      <button
        className="bg-yellow-500 hover:bg-yellow-700 text-white px-3 py-2 rounded w-full sm:w-auto"
        onClick={handleDecrease}
      >
        Decrease Quantity
      </button>

      <button
        className="bg-green-600 hover:bg-green-800 text-white px-3 py-2 rounded w-full sm:w-auto"
        onClick={handleIncrease}
      >
        Increase Quantity
      </button>

      <button
        className="bg-purple-600 hover:bg-purple-800 text-white px-3 py-2 rounded w-full sm:w-auto"
        onClick={handleClearAll}
      >
        Clear All
      </button>
    </div>
  );
};

export default MovieCard;
