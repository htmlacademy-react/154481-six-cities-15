import ReviewsList from '../reviews-list/reviews-list';
import { getAuthorizationStatus } from '../../utils/utils';
import { AuthorizationStatus } from '../../const';
import ReviewsForm from '../reviews-form/reviews-form';
import { FakeReviews } from '../mocks/reviews';

type TReviewsProps = {
  id: string;
}

function Reviews({ id }: TReviewsProps): JSX.Element {
  const filteredReviews = FakeReviews.filter((review) => review.id === id);
  const isAuth = getAuthorizationStatus() === AuthorizationStatus.Auth;

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews ·
        <span className="reviews__amount">
          {filteredReviews.length}
        </span>
      </h2>

      <ReviewsList reviews={filteredReviews} />
      {isAuth && <ReviewsForm />}

    </section>
  );
}

export default Reviews;
