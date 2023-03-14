import { MovieList } from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { movieSearch } from 'Service/ApiGet';

export const Movies = () => {
  const [params, setParams] = useSearchParams();
  const saveSearch = params.get('movie') ?? '';

  const [query, setQuery] = useState(saveSearch);
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (!query) return;
    async function MoviesQuery() {
      try {
        const { results } = await movieSearch(query);
        setMovies(results);
      } catch (error) {}
    }

    MoviesQuery();
  }, [query]);

  const handleOnChange = evt => {
    setQuery(evt.target.value);
    setParams({ movie: evt.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      alert('спробуй ще ');
      return;
    }
    setParams({ query });
    setQuery('');
  };

  return (
    <>
      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            // name="searchQuery"
            value={query}
            onChange={handleOnChange}
          />
          <button type="submit">
            <span>Search</span>
          </button>
        </form>
      </section>
      {movies && <MovieList movies={movies} />}
    </>
  );
};
