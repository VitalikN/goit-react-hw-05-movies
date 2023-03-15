import { Link, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { movieDetailsGet } from 'Service/ApiGet';
import {
  Container,
  Img,
  Title,
  Subject,
  Text,
  List,
  Item,
} from './MovieDetails.styled';

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

  const {
    id,
    name,
    title,
    poster_path,
    release_date,
    overview,
    genres,
    vote_average,
  } = movie;
  const Img_url = 'https://image.tmdb.org/t/p/w500';

  return (
    <section>
      <button>go back</button>

      <Container id={id}>
        <div>
          <Img src={Img_url + poster_path} alt={name ?? title} />
        </div>
        <div>
          <Title>
            {name ?? title} {release_date && `(${parseInt(release_date)})`}
          </Title>
          <Subject>User score: {Math.round(vote_average * 10)}%</Subject>
          <Subject>Overview</Subject>
          <Text>{overview}</Text>
          <Subject>Genres:</Subject>
          <List>
            {genres &&
              genres.map(({ id, name }) => <Item key={id}>{name}</Item>)}
          </List>
        </div>
      </Container>

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
