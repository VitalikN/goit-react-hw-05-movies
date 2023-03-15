import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { reviewsGet } from 'Service/ApiGet';
import { ListReviews } from './ListReviews';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;
    const ReviewsList = async () => {
      try {
        const { results } = await reviewsGet(movieId);
        setReviews(results);
      } catch (error) {}
    };
    ReviewsList();
  }, [movieId]);

  return <ListReviews reviews={reviews} />;
};
