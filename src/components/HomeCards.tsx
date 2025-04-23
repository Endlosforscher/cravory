import { Link } from 'react-router-dom';
import Card from "./Card"

const HomeCards = () => {
  return (
    <section className="py-4">
    <div className="container-xl lg:container m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <Card bgimage="bg-[url('/src/assets/images/bg-1.png')]">
          <h2 className="text-1xl font-serif font-bold">Find recipes your way</h2>
          <p className="mt-2 mb-4 text-md">
          Search by ingredients you already have at home or explore by keywords to discover new flavors.
          </p>
          <Link
            to="/search"
            className="inline-block bg-rose-400 text-white rounded-lg px-4 py-2 hover:bg-rose-500"
          >
            Start Searching
          </Link>
        </Card>

        <Card background="bg-rose-200" bgimage="bg-[url('/src/assets/images/bg-2.png')]">
        <h2 className="text-1xl font-serif font-bold">Explore Recipes</h2>
          <p className="mt-2 mb-4">
            Show our best recipes and get inspired by trending ingredients and dishes.
          </p>
          <Link
            to="/recipes"
            className="inline-block bg-rose-400 text-white rounded-lg px-4 py-2 hover:bg-rose-600"
          >
            View Recipes
          </Link>
        </Card>
      </div>
    </div>
  </section>
  )
}

export default HomeCards