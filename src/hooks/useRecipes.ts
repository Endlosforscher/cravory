import { useEffect, useState } from 'react'
import type { Recipe } from '../types/recipe'

export default function useRecipes(id?: string) {
  const [recipes, setRecipes] = useState<Recipe[] | Recipe | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = id ? `/api/recipes/${id}` : '/api/recipes'
        const res = await fetch(url)
        const data = await res.json()
        setRecipes(data)
      } catch (error) {
        console.error('Error fetching recipe(s):', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [id])

  return { recipes, loading }
}
