//4.запит інформації про акторський склад для сторінки кінофільму.
//https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US

//5. запит оглядів для сторінки кінофільму.
// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1

import axios from 'axios';

const API_KEY = '1174e437242bb46ea8831e578adaacd1';

export const trendingGet = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  );

  return data;
};

export const movieSearch = async searchQuery => {
  const { data } = await axios.get(`
https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${searchQuery}`);

  return data;
};

export const movieDetailsGet = async id => {
  const { data } =
    await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US
  `);

  return data;
};
