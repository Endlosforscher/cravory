import { useState, useEffect } from 'react'
import { useWishlist } from "../context/WishlistContext"
import RecipeListing from '../components/RecipeListing'
import type { Recipe } from '../types/recipe'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import EmptyWishlist from '../assets/images/empty-wishlist.png'

export default function WishlistPage() {
  const { wishlist } = useWishlist()
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL;
        const res = await fetch(`${baseUrl}/recipes`);
        const data: Recipe[] = await res.json()
        const saved = data.filter(r => wishlist.includes(r.id))
        setRecipes(saved)
      } catch (err) {
        console.error('Error fetching wishlist recipes', err)
      } finally {
        setLoading(false)
      }
    }
    fetchAll()
  }, [wishlist])

  if (loading) return <Spinner loading={loading} />
  if (recipes.length === 0) return (
    <>
        <div className="flex flex-col flex-grow items-center gap-6 justify-center">
            <img className="h-30 w-auto" src={EmptyWishlist} alt="Empty wishlist" />
            <p className="block text-3xl font-serif">Your wishlist is empty</p>
            <Link
                to="/recipes"
                className="h-[36px] block text-center max-w-md rounded-full bg-rose-500 active:bg-rose-400 hover:bg-rose-400 py-1 px-5 text-white"
                >Add recipes
            </Link>
        </div>
    </>
  )

  return (
    <section className="px-4 py-8">
      <h2 className="text-2xl font-serif font-bold mb-4">Your Wishlist</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {recipes.map(r => (
          <RecipeListing key={r.id} recipe={r} />
        ))}
      </div>
    </section>
  )
}
