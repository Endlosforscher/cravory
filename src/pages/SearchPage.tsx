import { useState, useMemo } from 'react'
import RecipeListing from '../components/RecipeListing'
import useRecipes from '../hooks/useRecipes'
import Spinner from '../components/Spinner'

export default function RecipeSearch() {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([])
  const [ingredientFilter, setIngredientFilter] = useState<string>('')
  const [searchKeyword, setSearchKeyword] = useState<string>('')
  const { recipes, loading } = useRecipes()
  const recipeList = Array.isArray(recipes) ? recipes : []

  // Derive unique ingredients list
  const allIngredients = useMemo(() => {
      const names = recipeList.flatMap(r => r.ingredients.map(i => i.name))
      return Array.from(new Set(names)).sort()
  }, [recipeList])

  // Filter ingredients by user input
  const filteredIngredients = useMemo(() => {
    if (!ingredientFilter) return allIngredients
    return allIngredients.filter(name =>
      name.toLowerCase().includes(ingredientFilter.toLowerCase())
    )
  }, [allIngredients, ingredientFilter])

  // Handle ingredient checkbox toggle
  const toggleIngredient = (ingredient: string) => {
    setSelectedIngredients(prev =>
      prev.includes(ingredient)
        ? prev.filter(i => i !== ingredient)
        : [...prev, ingredient]
    )
  }

  // Filter recipes by selected ingredients
  const recipesByIngredients = useMemo(() => {
    if (!selectedIngredients.length) return recipeList
    return recipeList.filter(r =>
      selectedIngredients.every(sel =>
        r.ingredients.some(i => i.name === sel)
      )
    )
  }, [recipeList, selectedIngredients])

  // filter by keyword
  const filteredRecipes = useMemo(() => {
    if (!searchKeyword) return recipesByIngredients
    return recipesByIngredients.filter(r =>
      r.title.toLowerCase().includes(searchKeyword.toLowerCase())
    )
  }, [recipesByIngredients, searchKeyword])

  if (loading) return <Spinner loading={loading} />

  return (
    <section className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Search Recipes</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <aside className="md:w-1/4">
          <h3 className="font-semibold mb-2">Select Ingredients</h3>
          <input
            type="text"
            placeholder="Filter ingredients..."
            value={ingredientFilter}
            onChange={e => setIngredientFilter(e.target.value)}
            className="w-full mb-3 px-2 py-1 border border-gray-300 rounded"
          />
          <ul className="space-y-1 max-h-80 overflow-auto">
            {filteredIngredients.map(name => (
              <li key={name} className="flex items-center">
                <input
                  id={name}
                  type="checkbox"
                  checked={selectedIngredients.includes(name)}
                  onChange={() => toggleIngredient(name)}
                  className="mr-2"
                />
                <label htmlFor={name} className="cursor-pointer">
                  {name}
                </label>
              </li>
            ))}
          </ul>
        </aside>

        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-4">
            <h3 className="font-semibold">
              {filteredRecipes.length}
              {' '}
              {filteredRecipes.length === 1 ? 'recipe' : 'recipes'}
              {' '}
              {selectedIngredients.length
                ? `with: ${selectedIngredients.join(', ')}`
                : 'found'}
            </h3>
            <input
              type="text"
              placeholder="Search by keyword..."
              value={searchKeyword}
              onChange={e => setSearchKeyword(e.target.value)}
              className="w-full sm:w-1/3 px-2 py-1 border border-gray-300 rounded"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map(recipe => (
              <RecipeListing key={recipe.id} recipe={recipe} />
            ))}
          </div>
          {filteredRecipes.length === 0 && (
            <p className="mt-4 text-center text-gray-600">
              No recipes match your criteria.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
