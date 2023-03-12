import { NavLink, Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/goit-react-hw-05-movies" end>
            Home
          </NavLink>
          <NavLink to="/goit-react-hw-05-movies/movies">Movies</NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};
