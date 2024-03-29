import { useState } from 'react';
import LocationsList from '../../components/locations-list/locations-list';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import PlacesSorting from '../../components/places-sorting/places-sorting';
import { GeneralOffer } from '../../components/types/offers';

type MainPageProps = {
  offers: GeneralOffer[];
}

function MainPage({ offers }: MainPageProps): JSX.Element {
  const [activeCard, setActiveCard] = useState('');

  const handleCardMouseOver = (id: string) => {
    setActiveCard(id);
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
            <b className="places__found">312 places to stay in Amsterdam</b>

            <PlacesSorting />
            <PlaceCardList
              offers={offers}
              handleCardMouseOver={handleCardMouseOver}
            />

          </section>
          <div
            className="cities__right-section"
            data-active-card={activeCard}
          >
            <section className="cities__map map"></section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
