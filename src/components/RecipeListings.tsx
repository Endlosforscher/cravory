import useRecipes from '../hooks/useRecipes'
import RecipeListing from './RecipeListing';
import Spinner from './Spinner';

const RecipeListings = ({ isHome = false }) => { 
 
  const { recipes, loading } = useRecipes(undefined, isHome ? 3 : undefined);
  
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
           {Array.isArray(recipes) && recipes.length > 0 ? (
              recipes.map(recipe => <RecipeListing key={recipe.id} recipe={recipe} />)
            ) : (
              <p>No recipes found.</p>
            )}
          </div>
        )}
    </div>
  </section>
  )
}

export default RecipeListings