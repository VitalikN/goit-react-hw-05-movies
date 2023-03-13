import { Link, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { movieDetailsGet } from 'components/Service/ApiGet';
import { Img_url } from 'pages/Home';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setmovie] = useState([]);
  useEffect(() => {
    const MovieDetailsList = async () => {
      try {
        const data = await movieDetailsGet(movieId);
        setmovie(data);
      } catch (error) {}
    };
    MovieDetailsList();
  }, [movieId]);
  const { id, name, title, poster_path } = movie;
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
