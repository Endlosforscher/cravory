import Card from "./Card"

const HomeCards = () => {
  return (
    <section className="py-4">
    <div className="container-xl lg:container m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <Card>
          <h2 className="text-2xl font-bold">Find Recipes Your Way</h2>
          <p className="mt-2 mb-4">
          Search by ingredients you already have at home or explore by keywords to discover new flavors.
          </p>
          <a
            href="#"
            className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
          >
            Start Searching
          </a>
        </Card>

        <Card background="bg-indigo-200">
        <h2 className="text-2xl font-bold">Explore Recipes</h2>
          <p className="mt-2 mb-4">
            Show our best recipes and get inspired by trending ingredients and dishes.
          </p>
          <a
            href="#"
            className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
          >
            View Recipes
          </a>
        </Card>
      </div>
    </div>
  </section>
  )
}

export default HomeCards