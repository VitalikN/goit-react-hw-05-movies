import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { movieDetailsGet } from 'Service/ApiGet';
import {
  Container,
  Img,
  Title,
  Subject,
  Text,
  List,
  ListLink,
  Item,
  StyledLink,
} from './MovieDetails.styled';
import { BackLink } from 'components/BackLink/BackLink';
import { Spinner } from 'components/Spinner/Spinner';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setmovie] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    if (!movieId) return;
    setIsLoader(true);
    const MovieDetailsList = async () => {
      try {
        const data = await movieDetailsGet(movieId);
        setmovie(data);
      } catch (error) {
      } finally {
        setIsLoader(false);
      }
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
      <BackLink to={backLinkHref}>Go back to movies</BackLink>
      {isLoader && <Spinner />}
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

          <ListLink>
            <li>
              <StyledLink to="cast" state={{ from: location.state?.from }}>
                Cast
              </StyledLink>
            </li>
            <li>
              <StyledLink to="reviews" state={{ from: location.state?.from }}>
                Reviews
              </StyledLink>
            </li>
          </ListLink>
        </div>
      </Container>

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </section>
  );
};
export default MovieDetails;
