import ReviewsList from '../reviews-list/reviews-list';
import ReviewsForm from '../reviews-form/reviews-form';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getComments } from '../store/data-reducer/selectors';
import UseAuth from '../hooks/use-auth';
import { useEffect } from 'react';
import { fetchCommentsAction } from '../store/api-action';
import { useParams } from 'react-router-dom';

function Reviews(): JSX.Element {
  const reviews = useAppSelector(getComments);
  const isAuth = UseAuth();
  const { id } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchCommentsAction(id));
    }
  }, [dispatch, id]);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews ·
        <span className="reviews__amount">
          {reviews.length}
        </span>
      </h2>

      <ReviewsList reviews={reviews} />
      {isAuth && <ReviewsForm />}

    </section>
  );
}

export default Reviews;
