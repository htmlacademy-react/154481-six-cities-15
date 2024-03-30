import React, { ChangeEvent } from 'react';
import { Rating } from '../../const';

type ReviewsRatingProps = {
  handleRatingChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function ReviewsRating({handleRatingChange}: ReviewsRatingProps): JSX.Element {
  return (
    <div className="reviews__rating-form form__rating">
      {
        Rating.map(({value, title}) => (
          <React.Fragment
            key={title}
          >
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              type="radio"
              onChange={handleRatingChange}
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
          </React.Fragment>
        ))
      }
    </div>
  );
}

export default ReviewsRating;
