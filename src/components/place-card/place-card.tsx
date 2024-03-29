import { Link } from 'react-router-dom';
import BookmarkButton from '../bookmark-button/bookmark-button';
import { GeneralOffer } from '../types/offers';
import { setRating } from '../../utils/utils';

type PlaceCardProps = {
  offer: GeneralOffer;
  handleCardMouseOver: (id: string) => void;
}

function PlaceCard({ offer, handleCardMouseOver }: PlaceCardProps): JSX.Element {
  const { id, isPremium, previewImage, price, isFavorite, title, type, rating } = offer;

  return (
    <article
      className="cities__card place-card"
      onMouseOver={() => handleCardMouseOver(id)}
    >
      {
        isPremium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )
      }

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <BookmarkButton isFavorite={isFavorite} />

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${setRating(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
