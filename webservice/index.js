const express = require('express');
const tmdb = require('./services/tmdb')
const app = express();

// Create a route for the root URL
app.get('/',(req,res) => {
    res.send('Sorry wrong endpoint, please go to /movies')
})
app.get('/movies', async (req, res) => {
    res.send(await tmdb.getMovies(req.query?.search));// query contains search string which is the title.
});
// Start the server
app.listen(5000, () => {
    console.log('Server listening on port 5000');
});