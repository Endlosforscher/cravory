import { Link } from "react-router-dom";
import { Recipe } from "./../types/recipe";
import { TruncatedText } from './common/TruncatedText';
import { FaSignal, FaClock, FaAllergies, FaHeart, FaRegHeart } from 'react-icons/fa';
import { useWishlist } from "../context/WishlistContext";

type RecipeCardProps = {
  recipe: Recipe;
};

const RecipeListing = ({ recipe } : RecipeCardProps) => {
    const { isSaved, toggle } = useWishlist();
    const saved = isSaved(recipe.id);
  
  return (
    <div className="bg-white rounded-xl shadow-md relative">
    <div className="p-4">
      <div className="mb-6">
        <div className="text-gray-600 my-2">{recipe.category}</div>
        <h3 className="text-xl font-bold">{recipe.title}</h3>
      </div>

      <div className="mb-5">
          <TruncatedText text={recipe.process.join(' ')} maxLength={150} />
      </div>

      <h3 className="text-indigo-500 mb-2 flex items-center gap-1">
        <FaSignal /> {recipe.difficulty}
      </h3>

      <h3 className="text-indigo-200 mb-2 flex items-center gap-1">
        <FaClock /> Preparation time: {recipe.prepTime}
      </h3>

      <div className="border border-gray-100 mb-5"></div>

      <div className="flex flex-col lg:flex-row justify-between mb-4">
        <div className="text-orange-700 mb-3">
        <p className="flex items-center gap-1">
        <FaAllergies /> {' '}
          {recipe.allergens.length === 1 && recipe.allergens[0] != 'None' ? (
            recipe.allergens[0]
          ) : (
            recipe.allergens.map((allergen, i) => (
              <span key={allergen}>
                {allergen}
                {i < recipe.allergens.length - 1 && ' | '}
              </span>
            ))
          )}
        </p>

        </div>
        <Link
          to={`/recipes/${recipe.id}`}
          className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
         Read More
        </Link>
        <button
            onClick={() => toggle(recipe.id)}
            className="absolute top-2 right-2 text-red-500 text-xl"
            aria-label={saved ? 'Remove from wishlist' : 'Add to wishlist'}
        >
        {saved ? <FaHeart /> : <FaRegHeart />}
      </button>
      </div>
    </div>
  </div>
  )
}

export default RecipeListing