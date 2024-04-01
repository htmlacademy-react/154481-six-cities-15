import { Link, generatePath } from 'react-router-dom';
import BookmarkButton from '../bookmark-button/bookmark-button';
import { TGeneralOffer } from '../types/offers';
import { convertRatingToPercantage } from '../../utils/utils';
import { AppRoute, CardType } from '../../const';

type TPlaceCardProps = {
  offer: TGeneralOffer;
  cardType: string;
  handleCardHover?: (id?: string) => void;
}

const CardSettings = {
  [CardType.Cities]: {
    CardClass: 'cities__card',
    ImageWrapperClass: 'cities__image-wrapper',
    CardInfoClass: '',
    ImageSize: {
      Width: 260,
      Height: 200
    }
  },
  [CardType.Favorites]: {
    CardClass: 'favorites__card',
    ImageWrapperClass: 'favorites__image-wrapper',
    CardInfoClass: 'favorites__card-info',
    ImageSize: {
      Width: 150,
      Height: 110
    }
  },
  [CardType.PlacesNearby]: {
    CardClass: 'near-places__card',
    ImageWrapperClass: 'near-places__image-wrapper',
    CardInfoClass: '',
    ImageSize: {
      Width: 260,
      Height: 200
    }
  },
};

function PlaceCard({ offer, cardType, handleCardHover }: TPlaceCardProps): JSX.Element {
  const { id, isPremium, previewImage, price, isFavorite, title, type, rating } = offer;

  const handleCardMouseEnter = () => handleCardHover && handleCardHover(id);
  const handleCardMouseLeave = () => handleCardHover && handleCardHover();

  return (
    <article
      className={`${CardSettings[cardType].CardClass} place-card`}
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={handleCardMouseLeave}
    >
      {
        isPremium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )
      }

      <div className={`${CardSettings[cardType].ImageWrapperClass} place-card`}>
        <Link to={{pathname: generatePath(AppRoute.Offer, {id})}}>
          <img
            className="place-card__image"
            src={previewImage}
            width={CardSettings[cardType].ImageSize.Width}
            height={CardSettings[cardType].ImageSize.Height}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={`${CardSettings[cardType].CardInfoClass} place-card`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

          <BookmarkButton isFavorite={isFavorite} />

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${convertRatingToPercantage(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={{ pathname: generatePath(AppRoute.Offer, { id }) }}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
