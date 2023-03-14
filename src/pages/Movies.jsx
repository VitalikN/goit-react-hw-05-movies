// import { useEffect, useState } from 'react';
// import { movieSearch } from 'Service/ApiGet';

export const Movies = () => {
  // const [searchQuery, setSearchQuery] = useState('');

  // useEffect(() => {
  //   if (!searchQuery) return;
  //   const MoviesQuery = async searchQuery => {
  //     try {
  //       const data = await movieSearch(searchQuery);
  //       setSearchQuery(data);
  //       console.log(data);
  //     } catch (error) {}
  //   };
  //   MoviesQuery();
  // }, [searchQuery]);

  const handleSubmit = evt => {
    // evt.preventDefault();
    // if (searchQuery.trim() === '') {
    //   alert.error('Here is your ....');
    //   return;
    // }
    // setSearchQuery(evt.target.value.toLowerCase());
    // setSearchQuery('');
  };
  // console.log(searchQuery);

  return (
    <section>
      <form>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          // value={searchQuery}
          onChange={handleSubmit}
        />
        <button type="submit">
          <span>Search</span>
        </button>
      </form>
    </section>
  );
};
