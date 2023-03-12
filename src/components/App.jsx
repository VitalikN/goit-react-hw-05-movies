// api_key=1174e437242bb46ea8831e578adaacd1

//1. список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// https://api.themoviedb.org/3/trending/all/day

//2.пошук фільму за ключовим словом на сторінці фільмів.
//https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

//3.запит повної інформації про фільм для сторінки кінофільму.
//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

//4.запит інформації про акторський склад для сторінки кінофільму.
//https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US

//5. запит оглядів для сторінки кінофільму.
// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1

import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { Cast } from './Cast/Cast';
import { NotFound } from './NotFound/NotFound';
import { Reviews } from './Reviews/Reviews';
import { SharedLayout } from './SharedLayout/SharedLayout';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="goit-react-hw-05-movies/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
export default App;
