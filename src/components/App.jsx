import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { Cast } from './Cast/Cast';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { NotFound } from './NotFound/NotFound';
import { Reviews } from './Reviews/Reviews';
import { SharedLayout } from './SharedLayout/SharedLayout';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="goit-react-hw-05-movies/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
export default App;
