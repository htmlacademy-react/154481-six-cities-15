import { Link, generatePath } from 'react-router-dom';
import BookmarkButton from '../bookmark-button/bookmark-button';
import { TGeneralOffer } from '../types/offers';
import { convertRatingToPercantage } from '../../utils/utils';
import { AppRoute, CardType } from '../../const';
import classNames from 'classnames';

type TPlaceCardProps = {
  offer: TGeneralOffer;
  cardType: string;
  handleCardHover?: (id?: string) => void;
}

const CardSettings = {
  [CardType.Cities]: {
    ImageSize: {
      Width: 260,
      Height: 200
    }
  },
  [CardType.Favorites]: {
    ImageSize: {
      Width: 150,
      Height: 110
    }
  }
};

function PlaceCard({ offer, cardType, handleCardHover }: TPlaceCardProps): JSX.Element {
  const { id, isPremium, previewImage, price, isFavorite, title, type, rating } = offer;

  const handleCardMouseEnter = () => handleCardHover && handleCardHover(id);
  const handleCardMouseLeave = () => handleCardHover && handleCardHover();

  return (
    <article
      className={
        classNames({
          'place-card': true,
          'cities__card': cardType === CardType.Cities,
          'favorites__card': cardType === CardType.Favorites
        })
      }
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

      <div
        className={
          classNames({
            'place-card__image-wrapper': true,
            'cities__image-wrapper': cardType === CardType.Cities,
            'favorites__image-wrapper': cardType === CardType.Favorites
          })
        }
      >
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
      <div
        className={
          classNames({
            'place-card__info': true,
            'favorites__card-info': cardType === CardType.Favorites
          })
        }
      >
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
