import { trendingGet } from 'components/Service/ApiGet';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, List, Item, Img, Text } from './Home.styled';

export const Img_url = 'https://image.tmdb.org/t/p/w500';
export const Home = () => {
  const [trendingList, setTrendingList] = useState([]);

  useEffect(() => {
    const trending = async () => {
      try {
        const { results } = await trendingGet();
        console.log(results);
        setTrendingList(results);
      } catch (error) {}
    };
    trending();
  }, []);

  return (
    <Container>
      <List>
        {trendingList.map(({ id, poster_path, title, name }) => (
          <Item key={id} id={id}>
            <Link to={`/goit-react-hw-05-movies/movies/:${id}`}>
              <Img src={Img_url + poster_path} alt={title ?? name} />
              <Text>{title ?? name}</Text>
            </Link>
          </Item>
        ))}
      </List>
    </Container>
  );
};
