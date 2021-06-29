const yargs = require('yargs')
const ProductsApi = require('./products.api')
const ProductsService = require('./product_service')
const {
  id,
  name,
  price,
  count

} = require('./option')
const { dbFilePath, propName } = require('./config')

const productsApi = ProductsApi(dbFilePath, propName);
(async () => {
  const {
    sum,
    avg,
    lessthan
  } = await ProductsService(productsApi)

  yargs
    .version('1.0.0')
    .usage('Usage: <command> [options]')
    .command({
      command: 'sum',
      describe: 'Summarize the total price of all products',
      builder: { id, price, count },
      handler: async () => console.log(await sum())

    })
    .command({
      command: 'avg',
      describe: 'Counts the avarage proice of the products',
      builder: { id, price },
      handler: async () => console.log(await avg())

    })
    .command({
      command: 'lessthan',
      describe: 'Lists all the products have "count" property less than the number given as parameter',
      builder: { id, name, count },
      handler: async (args) => console.log(await lessthan(args.count))
    })
    .locale('en')
    .strict()
    .help()
    .parse() // process.argv
})()
