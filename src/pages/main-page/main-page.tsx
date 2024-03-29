import Header from '../../components/header/header';
import LocationsList from '../../components/locations-list/locations-list';
import PlaceCard from '../../components/place-card/place-card';
import PlacesSorting from '../../components/places-sorting/places-sorting';
import { FakeOffers } from '../../utils/mock';

function MainPage(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />

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

              <div className="cities__places-list places__list tabs__content">
                {
                  FakeOffers.map((offer) => (
                    <PlaceCard
                      key={offer.id}
                      offer={offer}
                    />
                  ))
                }
              </div>

            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
