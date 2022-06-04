import URLS from "./urls";

const fetchMovies = (query) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await fetch(`${URLS.movies}&query=${query || 1}`);
      const data = await res.json();

      if (data.errors) reject(data.errors.join(""));

      const movies = data.results.map((m) => ({
        adult: m.adult,
        backdrop_path: m.backdrop_path,
        id: m.id,
        original_language: m.original_language,
        overview: m.overview,
        popularity: m.popularity,
        poster_path: m.poster_path,
        release_date: m.release_date,
        title: m.title,
        vote_average: m.vote_average,
        vote_count: m.vote_count,
      }));
      resolve(movies);
    } catch (error) {
      reject(error);
    }
  });
};
const fetchConfiguration = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await fetch(URLS.configuration);
      const data = await res.json();

      if (data.errors) reject(data.errors.join(""));

      const configurations = {
        baseImagesUrl: `${data.images.base_url}${data.images.poster_sizes[6]}/`,
      };
      resolve(configurations);
    } catch (error) {
      reject(error);
    }
  });
};

export { fetchMovies, fetchConfiguration };
