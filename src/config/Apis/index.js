
const API_KEY = `6b0cd26264eb59a6432f03d73e1f3899`;
export const IMG_URL = `https://image.tmdb.org/t/p/w500/`;

const Apis = {
  //Auth





  //App
  moviesList: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`,
  moviesGenres: `https://api.themoviedb.org/3/genre/movie/list?language=en'&api_key=${API_KEY}`,

  moviesListSearch: search =>
    search ?
      `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${API_KEY}`
      :
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`,


};

export default Apis;