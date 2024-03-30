import { Fragment } from 'react';
import { Rating } from '../../const';
import { TChangeHandler } from '../reviews-form/reviews-form';

type TReviewsRatingProps = {
  handleChange: TChangeHandler;
}

function ReviewsRating({handleChange}: TReviewsRatingProps): JSX.Element {
  return (
    <div className="reviews__rating-form form__rating">
      {
        Rating.map(({value, title}) => (
          <Fragment
            key={title}
          >
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              type="radio"
              onChange={handleChange}
            />
            <label
              htmlFor={`${value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={title}
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </Fragment>
        ))
      }
    </div>
  );
}

export default ReviewsRating;
