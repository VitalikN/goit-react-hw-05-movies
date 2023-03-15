import { movieTrendingGet } from 'Service/ApiGet';
import { useState, useEffect } from 'react';

import { MovieList } from 'components/MovieList/MovieList';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const movieTrending = async () => {
      try {
        const { results } = await movieTrendingGet();
        setMovies(results);
      } catch (error) {
        console.log('error');
      }
    };
    movieTrending();
  }, []);

  return <MovieList movies={movies} />;
};
