const fetch = require('node-fetch');

const url = 'https://api.themoviedb.org/3/search/movie?query={title}&include_adult=false&language=en-US&page=1';
const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjY3NjgxYmZjZjdiYTYxN2Y3OGZkZWY5ZTgzODQyYiIsInN1YiI6IjY1YjcwOGU3MGZiMTdmMDE3YjMzYzNiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.23ZzWf-zRRXSTJbisP7kVuTD_GldMHhAXJT0Gs61dW8'
    }
};

exports.getMovies = async function(title) {
    try {
        const results = []
        const posterBaseUrl = 'https://image.tmdb.org/t/p/w500'
        const movies = await fetch(url.replace('{title}',title), options)
                            .then(res => res.json())
                            .catch(err => console.error('error:' + err));
        
        for(let i = 0; i < movies.results.length; i++) {
            const movie = movies.results[i]
            const result = {
                movie_id : movie.id,
                title : movie.title,
                poster_image_url : movie.poster_path ? posterBaseUrl + movie.poster_path : '',
                popularity_summary : `${movie.popularity} out of ${movie.vote_count}` 
            }
            results.push(result)
        }
        return results
    } catch (error) {
        return 'It Failed. Try again with a different search parameter'
    }
}