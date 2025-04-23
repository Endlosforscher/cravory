import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner"
import { FaClock, FaSignal, FaAllergies, FaHeart, FaRegHeart } from 'react-icons/fa'
import { useWishlist } from '../context/WishlistContext'
import useRecipes from "../hooks/useRecipes";

const RecipePage = () => {
  const { id } = useParams();
  const { isSaved, toggle } = useWishlist()
  const { recipes: recipe, loading } = useRecipes(id)

  if (loading) {
    return <Spinner loading={true} />;
  }

  if (!recipe || Array.isArray(recipe)) return <p>Recipe not found.</p> 

  const saved = isSaved(recipe.id)

  return (
    <>
       <div className="container mx-auto max-w-3xl px-6 pt-6 pb-10">
        <article className="bg-white shadow-lg rounded-lg overflow-hidden relative">
            <button
            onClick={() => toggle(recipe.id)}
            className="absolute top-4 right-4 text-2xl text-red-500 hover:scale-110 transition-transform"
            aria-label={saved ? 'Remove from wishlist' : 'Add to wishlist'}
            >
            {saved ? <FaHeart /> : <FaRegHeart />}
            </button>
            <img
                src={`/images/${recipe.image}`}
                alt={recipe.title}
                className="w-full h-64 object-cover"
            />

            <div className="p-6">
                <header className="mb-4">
                <h1 className="text-3xl font-bold font-serif mb-1">{recipe.title}</h1>
                <span className="inline-block bg-rose-100 text-rose-500 text-sm px-2 py-1 rounded">
                    {recipe.category}
                </span>
                </header>

            <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-6">
            <div className="flex items-center space-x-1">
                <FaClock className="text-lg" />
                <span>{recipe.prepTime} min</span>
            </div>
            <div className="flex items-center space-x-1">
                <FaSignal className="text-lg" />
                <span>{recipe.difficulty}</span>
            </div>
            <div className="flex items-center space-x-1">
                <FaAllergies className="text-lg" />
                <span>{recipe.allergens.length === 1 && recipe.allergens[0] === 'None'
                    ? 'None'
                    : recipe.allergens.join(' | ')}</span>
            </div>
            </div>

            <section className="mb-10">
            <h2 className="text-2xl font-semibold font-serif mb-3">Ingredients</h2>
            <ul className="list-disc list-inside space-y-1">
                {recipe.ingredients.map((ing) => (
                    <li key={ing.name}>
                    {ing.name} – {ing.quantity}
                    </li>
                ))}
                </ul>
            </section>

            <section>
            <h2 className="text-2xl font-semibold font-serif mb-3">Preparation</h2>
            <ol className="list-decimal list-inside space-y-2">
                {recipe.process.map((step, idx) => (
                    <li key={idx}>{step}</li>
                ))}
                </ol>
            </section>
        </div>
        </article>
    </div>
    </>
  );
}

export default RecipePage