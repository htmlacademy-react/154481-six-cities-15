import { CardType } from '../../const';
import PlaceCard from '../place-card/place-card';
import { GeneralOffer } from '../types/offers';

type FavoritesListProps = {
  offers: GeneralOffer[];
}

function FavoritesList({ offers }: FavoritesListProps): JSX.Element {
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
                <a className="locations__item-link" href="#">
                  <span>{city}</span>
                </a>
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
