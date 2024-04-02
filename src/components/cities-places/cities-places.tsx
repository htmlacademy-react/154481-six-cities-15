import { useState } from 'react';
import Map from '../map/map';
import PlaceCardList from '../place-card-list/place-card-list';
import PlacesSorting from '../places-sorting/places-sorting';
import { useAppSelector } from '../hooks';
import { getActiveCity } from '../store/interface-reducer/selectors';
import { getOffersByCity } from '../store/data-reducer/selectors';
import { PlacesSort } from '../../const';
import { sortOffers } from '../../utils/utils';

function CitiesPlaces(): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const [activeSort, setActiveSort] = useState<string>(PlacesSort.Popular);

  const activeCity = useAppSelector(getActiveCity);
  const offers = useAppSelector(getOffersByCity);
  const sortedOffers = sortOffers(offers, activeSort);

  const handleCardHover = (id?: string) => {
    setActiveCardId(id || null);
  };

  const handleSortChange = (sort: string) => {
    setActiveSort(sort);
  };

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {offers.length} places to stay in {activeCity}
          </b>

          <PlacesSorting
            activeSort={activeSort}
            handleSortChange={handleSortChange}
          />

          <PlaceCardList
            offers={sortedOffers}
            handleCardHover={handleCardHover}
          />

        </section>

        <div className="cities__right-section">
          <Map
            offers={offers}
            activeCardId={activeCardId}
            className='cities__map'
          />
        </div>
      </div>
    </div>
  );
}

export default CitiesPlaces;
