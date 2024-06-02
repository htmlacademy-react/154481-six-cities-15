import { Helmet } from 'react-helmet-async';
import FavoritesList from '../../components/favorites-list/favorites-list';
import { useAppSelector } from '../../components/hooks';
import { getOffers } from '../../components/store/data-reducer/selectors';
import Footer from '../../components/footer/footer';

function FavoritesPage(): JSX.Element {
  const offers = useAppSelector(getOffers);

  return (
    <>
      <main className="page__main page__main--favorites">
        <Helmet>
          <title>6 cities. Favorites</title>
        </Helmet>

        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>

            <FavoritesList offers={offers} />
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default FavoritesPage;
