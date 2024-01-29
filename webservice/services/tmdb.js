const fetch = require('node-fetch');

const url = 'https://api.themoviedb.org/3/search/movie?query={title}&include_adult=false&language=en-US&page=1';
const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjY3NjgxYmZjZjdiYTYxN2Y3OGZkZWY5ZTgzODQyYiIsInN1YiI6IjY1YjcwOGU3MGZiMTdmMDE3YjMzYzNiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.23ZzWf-zRRXSTJbisP7kVuTD_GldMHhAXJT0Gs61dW8'
    }
};

fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));