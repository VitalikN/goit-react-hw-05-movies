import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { castGet } from 'Service/ApiGet';
import { CastList } from './CastList';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    const CastList = async () => {
      try {
        const { cast } = await castGet(movieId);
        setCast(cast);
      } catch (error) {}
    };
    CastList();
  }, [movieId]);

  return (
    <>
      <ul>
        <CastList listCast={cast} />
      </ul>
    </>
  );
};
