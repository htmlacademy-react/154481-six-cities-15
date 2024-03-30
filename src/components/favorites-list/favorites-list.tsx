import { Link } from 'react-router-dom';
import { CardType } from '../../const';
import PlaceCard from '../place-card/place-card';
import { TGeneralOffer } from '../types/offers';

type TFavoritesListProps = {
  offers: TGeneralOffer[];
}

function FavoritesList({ offers }: TFavoritesListProps): JSX.Element {
  const filteredOffers = offers.filter((offer) => offer.isFavorite);
  const cities = [...new Set(filteredOffers.map(({ city }) => city.name))];

  return (
    <ul className="favorites__list">
      {
        cities.map((city) => (
          <li
            key={city}
            className="favorites__locations-items"
          >
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to="#">
                  <span>{city}</span>
                </Link>
              </div>
            </div>

            <div className="favorites__places">
              {
                filteredOffers.map((offer) => (
                  <PlaceCard
                    key={offer.id}
                    offer={offer}
                    cardType={CardType.Favorites}
                  />
                ))
              }

            </div>
          </li>
        ))
      }
    </ul>
  );
}

export default FavoritesList;
