const KEY_API = 'a41a53d509bba7453535553f3e42162d';
const URL = 'https://api.themoviedb.org/3';

export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export const fetchTrendingMovie = () => {
  return fetch(`${URL}/trending/movie/day?api_key=${KEY_API}`)
    .then(response => response.json())
    .then(response => response?.results)
    .catch(console.log);
};

export const fetchQueryMovie = query => {
  return fetch(
    `${URL}/search/movie?api_key=${KEY_API}&language=en-US&query=${query}&page=1&include_adult=false`,
  )
    .then(response => response.json())
    .then(response => response?.results)
    .catch(console.log);
};

export const fetchDetailsMovie = id => {
  return fetch(`${URL}/movie/${id}?api_key=${KEY_API}`)
    .then(response => response.json())
    .then(response => response)
    .catch(console.log);
};

export const fetchCastMovie = id => {
  return fetch(`${URL}/movie/${id}/credits?api_key=${KEY_API}&language=en-US`)
    .then(respopnse => respopnse.json())
    .then(response => response?.cast)
    .catch(console.log);
};
export const fetchReviewsMovie = id => {
  return fetch(
    `${URL}/movie/${id}/reviews?api_key=${KEY_API}&language=en-US&page=1`,
  )
    .then(respopnse => respopnse.json())
    .then(response => response?.results)
    .catch(console.log);
};
