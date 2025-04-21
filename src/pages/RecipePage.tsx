import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner"
import type { Recipe } from "../types/recipe";

const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const fetchRecipe = async () => {
        try {
          const apiUrl = `/api/recipes/${id}`;
          const res = await fetch(apiUrl);
          const recipeData = await res.json();
          setRecipe(recipeData);
        } catch (error) {
          console.log(`Error fetching data: ${error}`)
        } finally {
          setLoading(false);
        }
      }
  
      fetchRecipe();  
  }, [id])

  if (loading) {
    return <Spinner loading={true} />;
  }

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
    </div>
  );
}

export default RecipePage