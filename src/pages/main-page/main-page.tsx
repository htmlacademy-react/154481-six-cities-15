import { useState } from 'react';
import LocationsList from '../../components/locations-list/locations-list';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import PlacesSorting from '../../components/places-sorting/places-sorting';
import Map from '../../components/map/map';
import { useAppSelector } from '../../components/hooks';

function MainPage(): JSX.Element {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const activeCity = useAppSelector((state) => state.activeCity);
  const offers = useAppSelector((state) => state.offers);
  const offersByCity = offers.filter((offer) => offer.city.name === activeCity);

  const handleCardHover = (id?: string) => {
    setActiveCardId(id || null);
  };

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>

      <div className="tabs">
        <section className="locations container">
          <LocationsList />
        </section>
      </div>

      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">
              {offersByCity.length} places to stay in {activeCity}
            </b>

            <PlacesSorting />
            <PlaceCardList
              offers={offersByCity}
              handleCardHover={handleCardHover}
            />

          </section>

          <div className="cities__right-section">
            <Map
              offers={offersByCity}
              activeCardId={activeCardId}
              className='cities__map'
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
