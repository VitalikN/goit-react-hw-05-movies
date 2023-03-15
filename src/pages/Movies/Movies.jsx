import { MovieList } from 'components/MovieList/MovieList';
import { Spinner } from 'components/Spinner/Spinner';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { movieSearch } from 'Service/ApiGet';
import {
  Input,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
} from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoader, setIsLoader] = useState(false);
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (searchParams.get('searchQuery') === null) return;
    const searchTitle = searchParams.get('searchQuery');
    setIsLoader(true);
    async function MoviesQuery() {
      try {
        const { results } = await movieSearch(searchTitle);
        setMovies(results);
      } catch (error) {
      } finally {
        setIsLoader(false);
      }
    }

    MoviesQuery();
  }, [searchParams]);

  const handleOnChange = evt => {
    setQuery(evt.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      alert('спробуй ще ');
      return;
    }
    setSearchParams({ searchQuery: query });

    setQuery('');
  };

  return (
    <>
      <section>
        <SearchForm onSubmit={handleSubmit}>
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="searchQuery"
            value={query}
            onChange={handleOnChange}
          />
          <SearchFormButton type="submit">
            Search
            <SearchFormButtonLabel></SearchFormButtonLabel>
          </SearchFormButton>
        </SearchForm>
      </section>
      {movies && <MovieList movies={movies} />}
      {isLoader && <Spinner />}
    </>
  );
};
export default Movies;
