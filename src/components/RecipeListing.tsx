import { Link } from "react-router-dom";
import { Recipe } from "./../types/recipe";
import { TruncatedText } from './common/TruncatedText';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useWishlist } from "../context/WishlistContext";

type RecipeCardProps = {
  recipe: Recipe;
};

const RecipeListing = ({ recipe } : RecipeCardProps) => {
    const { isSaved, toggle } = useWishlist();
    const saved = isSaved(recipe.id);
  
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden flex flex-col group">
     
     <div className="h-48 overflow-hidden relative">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-2 left-2 bg-rose-400 text-white text-xs px-3 py-1 rounded-full shadow">
          {recipe.category}
        </span>

        <button
            onClick={() => toggle(recipe.id)}
            className="absolute top-2 right-2 text-red-500 text-xl active:bg-none"
            aria-label={saved ? 'Remove from wishlist' : 'Add to wishlist'}
        >
        {saved ? <FaHeart /> : <FaRegHeart />}
      </button>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-rose-400 transition-colors mb-2 line-clamp-2">
          {recipe.title}
        </h3>

        <p className="text-sm text-gray-600 mb-3 line-clamp-3">
          <TruncatedText text={recipe.process.join(' ')} maxLength={150} />
        </p>

        <div className="mt-auto flex flex-wrap gap-1">
          {recipe.ingredients.slice(0, 3).map(ingredient => (
            <span
              key={ingredient.name}
              className="text-xs bg-rose-100 text-rose-500 px-2 py-0.5 rounded-full"
            >
              {ingredient.name}
            </span>
          ))}
          {recipe.ingredients.length > 3 && (
            <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
              +{recipe.ingredients.length - 3} more
            </span>
          )}
        </div>
    </div>

    <Link
          to={`/recipes/${recipe.id}`}
          className="h-[36px] bg-rose-400 hover:bg-rose-600 text-white px-4 py-2 text-center text-sm"
        >
         Read more
        </Link>
      </div>
  )
}

export default RecipeListing