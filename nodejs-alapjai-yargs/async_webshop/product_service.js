
const ProductService = async (productsApi) => {
  const products = await productsApi.get()

  const sum = async () => {
    let sumPriceAndCount = 0
    await products.map(product => {
      sumPriceAndCount += product.price * product.count
    })
    return sumPriceAndCount
  }
  const avg = async () => {
    let allItemPrice = 0
    await products.forEach(product => {
      allItemPrice += product.price
    })
    return allItemPrice / products.length
  }

  const lessthan = async (count) => {
    return await products.filter(product => product.count < count)
  }

  return {
    sum,
    avg,
    lessthan
  }
}

module.exports = Object.freeze(ProductService)