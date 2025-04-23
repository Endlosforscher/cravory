import { Link } from "react-router-dom"

const ViewAllRecipes = () => {
  return (    
    <section className="bg-rose-50 w-full px-6 pt-6 pb-10">
      <Link
        to="/recipes"
        className="h-[36px] block m-auto text-center max-w-md rounded-full bg-rose-500 active:bg-rose-400 hover:bg-rose-400 py-1 px-5 text-white"
        >View all recipes
      </Link>
    </section>
  )
}

export default ViewAllRecipes