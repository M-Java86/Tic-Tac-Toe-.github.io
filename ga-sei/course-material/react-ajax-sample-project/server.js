const express = require('express')
const app = express(); 
const MovieApi = require('./api/movies.js');

const movieApi = new MovieApi();

app.use(express.json());

app.get('/shows', (req,res) => {
  movieApi.searchMovies(req.query.q)
    .then(shows => {
      res.send(shows);
    });
});

app.get('/favorites', (req,res) => {
  res.send(movieApi.getFavorites());
});

app.post('/favorites', (req,res) => {
  movieApi.addFavoriteMovie(req.body);
  res.status(201).end();
});

app.delete('/favorites/:id', (req, res) => {
  movieApi.deleteFavoriteMovie(req.params.id);
  res.status(201).end();
});

const PORT = 80;
app.listen(PORT, () => {
  console.log(`running express on port: ${PORT}`)
});
