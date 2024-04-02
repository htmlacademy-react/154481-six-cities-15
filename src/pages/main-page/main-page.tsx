import LocationsList from '../../components/locations-list/locations-list';
import CitiesPlaces from '../../components/cities-places/cities-places';

function MainPage(): JSX.Element {
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>

      <div className="tabs">
        <section className="locations container">
          <LocationsList />
        </section>
      </div>

      <CitiesPlaces />

    </main>
  );
}

export default MainPage;
