import express from 'express'

import { getMovies, getMovie, createMovie, deleteMovie , updateMovie} from './database.js'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('hello world push ')
})

app.get("/movies", async (req, res) => {
  const movies = await getMovies()
  res.send(movies)
})

app.get("/movies/:id", async (req, res) => {
  const id = req.params.id
  const note = await getMovie(id)
  res.send(movie)
})

app.post("/movies", async (req, res) => {
  const { title, rating } = req.body
  const movie = await createMovie(title, rating)
  res.status(201).send(movie)
})
app.post("/movieDelete", async (req, res) => {
    const { id } = req.body
    const movie = await deleteMovie(id)
    res.status(201).send(movie)
  })

app.post("/movieUpdate", async (req, res) => {
    const { id ,title,rating } = req.body
    const movie = await updateMovie(id,title,rating)
    res.status(201).send(movie)
  })
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Connection error')
})

app.listen(process.env.PORT, () => {
  console.log('Server is running on port 3000')
})