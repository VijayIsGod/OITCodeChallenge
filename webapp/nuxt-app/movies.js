const fetch = require('node-fetch');

const url = 'http://www.localhost:5000/movies?search={title}';

exports.fetchMovies = async function(title) {
    try {
        const movies = await fetch(url.replace('{title}',title), options)
                        .then(res => res.json())
        return movies
    } catch (err) {
        return []
    }
}