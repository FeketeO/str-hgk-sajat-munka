
const ProductService = async (productsApi) => {
  let poducts = await productsApi.get()

  

  return {
    getAllMovies,
    findMovieById,
    createMovie,
    editMovie,
    removeMovie
  }


module.exports = Object.freeze(MoviesService)