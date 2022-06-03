const URLS = {
  configuration: `https://api.themoviedb.org/3/configuration?api_key=${process.env.REACT_APP_MOVIES_API_KEY}`,
  movies: `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}`,
};

export default URLS;
