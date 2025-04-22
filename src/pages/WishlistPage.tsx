import { useState, useEffect } from 'react'
import { useWishlist } from "../context/WishlistContext"
import RecipeListing from '../components/RecipeListing'
import type { Recipe } from '../types/recipe'

export default function WishlistPage() {
  const { wishlist } = useWishlist()
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [loading, setLoading] = useState(true)

  console.log('Wishlist IDs from context:', wishlist);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const res = await fetch('/api/recipes')
        const data: Recipe[] = await res.json()
        console.log('🔍 All recipes fetched:', data.length);
        const saved = data.filter(r => wishlist.includes(r.id))
        console.log('🔍 Filtered saved recipes:', saved);
        setRecipes(saved)
      } catch (err) {
        console.error('Error fetching wishlist recipes', err)
      } finally {
        setLoading(false)
      }
    }
    fetchAll()
  }, [wishlist])

  if (loading) return <p>Loading your wishlist…</p>
  if (recipes.length === 0) return <p>Your wishlist is empty.</p>

  return (
    <section className="px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recipes.map(r => (
          <RecipeListing key={r.id} recipe={r} />
        ))}
      </div>
    </section>
  )
}
