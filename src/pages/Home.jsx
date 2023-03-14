import { trendingGet } from 'Service/ApiGet';
import { useState, useEffect } from 'react';

import { MovieList } from 'components/MovieList/MovieList';

export const Home = () => {
  // const [trendingList, setTrendingList] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const trending = async () => {
      try {
        const { results } = await trendingGet();
        console.log(results);
        setMovies(results);
      } catch (error) {}
    };
    trending();
  }, []);

  return <MovieList movies={movies} />;
};
