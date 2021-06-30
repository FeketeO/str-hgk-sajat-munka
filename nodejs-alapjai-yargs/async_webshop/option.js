const Option = ({ alias, describe, type = 'number', demandOption = 'true' } = {}) => ({
  alias, describe, type, demandOption
})

const id = Option({
  alias: 'i',
  describe: 'Product ID'
})

const name = Option({
  alias: 'n',
  describe: 'Name of the product',
  type: 'string'
})

const price = Option({
  alias: 'p',
  describe: 'Price of the product'
})

const count = Option({
  alias: 'c',
  describe: 'Product counted'
})

module.exports = Object.freeze({
  id,
  name,
  price,
  count
})
