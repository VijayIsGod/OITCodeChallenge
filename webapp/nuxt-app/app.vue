<template>
  <div class="search">
    <input v-model="title" placeholder="Please type any text to get movies">
    <button @click="getMovies()">Search</button>
    <p>Searching for this {{ title }}</p>
  </div>
  <table class="displayMovies">
    <caption>
      Movies
    </caption>
    <thead>
      <th>Movie_Id</th>
      <th>Title</th>
      <th>Poster_URL</th>
      <th>Popularity_Summary</th>
    </thead>
    <tbody v-for="movie in movies" :key="movie.id">
      <td>{{movie.movie_id}}</td>
      <td>{{movie.title}}</td>
      <td>{{movie.poster_image_url}}</td>
      <td>{{movie.popularity_summary}}</td>
    </tbody>
  </table>
</template>
<script>
import {fetchMovies} from './movies'

export default {
  name: 'App',
  data() {
    return {
      title: '',
      movies: []
    }
  },
  methods: {
    async getMovies() {
      movies = await getMovies(title)
    }
  }
}
</script>
