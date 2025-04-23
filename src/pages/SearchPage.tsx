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

  const allIngredients = useMemo(() => {
    const names = recipeList.flatMap(r => r.ingredients.map(i => i.name))
    return Array.from(new Set(names)).sort()
  }, [recipeList])

  // Filter ingredients by user input
  const filteredIngredients = useMemo(() => {
    if (!ingredientFilter.trim()) return allIngredients
    return allIngredients.filter(name =>
      name.toLowerCase().includes(ingredientFilter.toLowerCase())
    )
  }, [allIngredients, ingredientFilter])

  // Group filtered ingredients by category
  const ingredientsByCategory = useMemo(() => {
    const groups: Record<string, string[]> = {}
    recipeList.forEach(recipe => {
      recipe.ingredients.forEach(ing => {
        if (!filteredIngredients.includes(ing.name)) return
        const cat = ing.category || 'uncategorized'
        if (!groups[cat]) groups[cat] = []
        if (!groups[cat].includes(ing.name)) groups[cat].push(ing.name)
      })
    })
    // Sort ingredient names in each category
    Object.values(groups).forEach(arr => arr.sort())
    return groups
  }, [recipeList, filteredIngredients])

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

  // Filter by keyword
  const filteredRecipes = useMemo(() => {
    if (!searchKeyword.trim()) return recipesByIngredients
    return recipesByIngredients.filter(r =>
      r.title.toLowerCase().includes(searchKeyword.toLowerCase())
    )
  }, [recipesByIngredients, searchKeyword])

  if (loading) return <Spinner loading={true} />

  return (
    <section className="mx-1 p-6">
      <h2 className="text-2xl font-serif font-bold mb-4">Search Recipes</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <aside className="md:w-1/4">
          <input
            type="text"
            placeholder="Filter by ingredients"
            value={ingredientFilter}
            onChange={e => setIngredientFilter(e.target.value)}
            className="input--primary w-full"
          />
          <div className="sm:max-h-80 max-h-50 mt-2 overflow-auto">
            {Object.entries(ingredientsByCategory).map(([category, items]) => (
              <div key={category} className="mb-4">
                <h3 className="text-xl font-serif font-medium capitalize mb-3 mt-5">{category}</h3>
                <ul className="space-y-1">
                  {items.map(name => (
                    <li key={name} className="flex items-center mb-3">
                      <input
                        id={name}
                        type="checkbox"
                        checked={selectedIngredients.includes(name)}
                        onChange={() => toggleIngredient(name)}
                        className="checkbox--primary mx-1 focus:outline-none"
                      />
                      <label htmlFor={name} className="label--primary">
                        {name}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-4">
            <h3 className='flex-1'>
              <b>{filteredRecipes.length}</b>
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
              className="input--primary min-w-64 md:min-w-48"
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