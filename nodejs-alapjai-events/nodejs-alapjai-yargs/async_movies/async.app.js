const yargs = require('yargs')
const MoviesApi = require('./async.movies.api')
const MoviesService = require('./async.movies_service')
const {
  id,
  producer,
  title
} = require('./option')
const { dbFilePath, propName } = require('./config')

const moviesApi = MoviesApi(dbFilePath, propName);
(async () => {
  const {
    getAllMovies,
    findMovieById,
    createMovie,
    editMovie,
    removeMovie
  } = await MoviesService(moviesApi)

  yargs
    .version('1.0.0')
    .usage('Usage: <command> [options]')
    .command({
      command: 'get',
      describe: 'Get all movies',
      handler: async () => console.log(await getAllMovies())

    })
    .command({
      command: 'find',
      describe: 'Find a movies by ID',
      builder: { id },
      handler: async (args) =>
        console.log(await findMovieById(args.id))

    })
    .command({
      command: 'create',
      describe: 'Movie ID',
      builder: { producer, title },
      handler: async (args) => {
        console.log(await createMovie(args))
      }
    })
    .command({
      command: 'edit',
      describe: 'Edit a movie',
      builder: { id, producer, title },
      handler: async (args) => {
        console.log(await editMovie(args))
      }
    })
    .command({
      command: 'remove',
      describe: 'Remove a movie',
      builder: { id },
      handler: async (args) => {
        await removeMovie(args.id)
        console.log('deleted')
      }
    })
    .locale('en')
    .strict()
    .help()
    .parse() // process.argv
})()
