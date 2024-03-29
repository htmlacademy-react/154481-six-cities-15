import { Link } from 'react-router-dom';
import BookmarkButton from '../bookmark-button/bookmark-button';
import { GeneralOffer } from '../types/offers';
import { setRating } from '../../utils/utils';
import { CardType } from '../../const';
import classNames from 'classnames';

type PlaceCardProps = {
  offer: GeneralOffer;
  cardType: string;
  handleCardMouseOver?: (id: string) => void;
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

function PlaceCard({ offer, cardType, handleCardMouseOver }: PlaceCardProps): JSX.Element {
  const { id, isPremium, previewImage, price, isFavorite, title, type, rating } = offer;

  return (
    <article
      className={
        classNames({
          'place-card': true,
          'cities__card': cardType === CardType.Cities,
          'favorites__card': cardType === CardType.Favorites
        })
      }
      onMouseOver={() => handleCardMouseOver && handleCardMouseOver(id)}
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
        <Link to="#">
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
