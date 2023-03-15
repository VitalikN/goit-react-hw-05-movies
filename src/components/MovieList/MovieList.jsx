import {
  Container,
  List,
  Item,
  Img,
  Text,
  StyledLink,
} from 'components/MovieList/MovieList.styled.jsx';

export const MovieList = ({ movies }) => {
  const Img_url = 'https://image.tmdb.org/t/p/w500';
  return (
    <Container>
      <List>
        {movies.map(({ id, poster_path, title, name }) => (
          <Item key={`${id}`}>
            <StyledLink id={`${id}`} to={`/movies/${id}`}>
              <Img src={Img_url + poster_path} alt={title ?? name} />
              <Text>{title ?? name} </Text>
            </StyledLink>
          </Item>
        ))}
      </List>
    </Container>
  );
};
