import { useState, useEffect } from 'react';
import type { Recipe } from '../types/recipe';
import RecipeListing from './RecipeListing';
import Spinner from './Spinner';

const RecipeListings = ({ isHome = false }) => { 
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const baseUrl = '/api/recipes';
        const apiUrl = isHome ? `${baseUrl}?_limit=3` : baseUrl;
        const res = await fetch(apiUrl);
        const data = await res.json();
        setRecipes(data);
      } catch (error) {
        console.log(`Error fetching data: ${error}`)
      } finally {
        setLoading(false);
      }
    }

    fetchRecipes();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
    <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
        { isHome ? 'Browse Recipes' : 'All Recipes' }
      </h2>
      {loading ? (
            <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
                <RecipeListing key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}
    </div>
  </section>
  )
}

export default RecipeListings