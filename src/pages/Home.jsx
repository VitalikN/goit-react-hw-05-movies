import { trendingGet } from 'Service/ApiGet';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, List, Item, Img, Text } from './Home.styled';

const Img_url = 'https://image.tmdb.org/t/p/w500';
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
          <Item key={`${id}`}>
            <Link id={`${id}`} to={`movies/${id}`}>
              <Img src={Img_url + poster_path} alt={title ?? name} />
              <Text>{title ?? name} </Text>
            </Link>
          </Item>
        ))}
      </List>
    </Container>
  );
};
