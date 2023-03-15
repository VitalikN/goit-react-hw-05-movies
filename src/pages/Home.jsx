import { movieTrendingGet } from 'Service/ApiGet';
import { useState, useEffect } from 'react';

import { MovieList } from 'components/MovieList/MovieList';
import { Spinner } from 'components/Spinner/Spinner';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    setIsLoader(true);
    const movieTrending = async () => {
      try {
        const { results } = await movieTrendingGet();
        setMovies(results);
      } catch (error) {
        console.log('error');
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
    </>
  );
};
export default Home;
