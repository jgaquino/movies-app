import URLS from "./urls";

const fetchMovies = (query) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await fetch(`${URLS.movies}&query=${query || 1}`);
      const data = await res.json();

      if (data.errors) reject(data.errors.join(""));
      resolve(data);
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
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export { fetchMovies, fetchConfiguration };
