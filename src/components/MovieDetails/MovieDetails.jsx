import { Link, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { movieDetailsGet } from 'Service/ApiGet';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    const MovieDetailsList = async () => {
      try {
        const data = await movieDetailsGet(movieId);
        setmovie(data);
      } catch (error) {}
    };
    MovieDetailsList();
  }, [movieId]);
  console.log(movieId);
  const { id, name, title, poster_path } = movie;
  const Img_url = 'https://image.tmdb.org/t/p/w500';

  return (
    <section>
      <button>go back</button>

      <div id={id}>
        <img
          src={Img_url + poster_path}
          alt={name ?? title}
          width={200}
          height={300}
        />

        <p>{name ?? title}</p>
      </div>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </section>
  );
};
