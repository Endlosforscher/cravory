import { useEffect, useState } from 'react'
import type { Recipe } from '../types/recipe'

export default function useRecipes(id?: string, limit?: number) {
  const [recipes, setRecipes] = useState<Recipe[] | Recipe | null>(null)
  const [loading, setLoading] = useState(true)
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = '';

        if (id) {
         url = `${baseUrl}/recipes/${id}`
        } else if (limit) {
         url = `${baseUrl}/recipes?_limit=${limit}`
        } else {
         url = `${baseUrl}/recipes`
        }

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
