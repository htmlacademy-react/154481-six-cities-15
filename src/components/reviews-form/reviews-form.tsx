import { ReactEventHandler, useState } from 'react';
import ReviewsRating from '../reviews-rating/reviews-rating';
import { useAppDispatch } from '../hooks';
import { postCommentAction } from '../store/thunks/comments';
import { useParams } from 'react-router-dom';

export type TChangeHandler = ReactEventHandler<HTMLInputElement | HTMLTextAreaElement>;

function ReviewsForm(): JSX.Element {
  const { id } = useParams();
  const [form, setForm] = useState({
    rating: '0',
    review: '',
  });

  const dispatch = useAppDispatch();

  const handleChange: TChangeHandler = (e) => {
    const { name, value } = e.currentTarget;

    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit: ReactEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(postCommentAction({
        rating: +form.rating,
        comment: form.review,
        id
      }));
    }
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>

      <ReviewsRating
        handleChange={handleChange}
      />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={form.review}
        onChange={handleChange}
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
            To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
            your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={form.review.length < 50 || form.rating === '0'}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
