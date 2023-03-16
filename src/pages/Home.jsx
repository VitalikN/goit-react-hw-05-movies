import { movieTrendingGet } from 'Service/ApiGet';
import { useState, useEffect } from 'react';

import { MovieList } from 'components/MovieList/MovieList';
import { Spinner } from 'components/Spinner/Spinner';
import { NotFound } from 'components/NotFound/NotFound';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoader(true);
    const movieTrending = async () => {
      try {
        const { results } = await movieTrendingGet();
        setMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoader(false);
      }
    };
    movieTrending();
  }, []);

  return (
    <>
      <MovieList movies={movies} />
      {isLoader && <Spinner />}
      {error && (
        <NotFound children={`Something went wrong Try again later.😭`} />
      )}
    </>
  );
};
export default Home;
