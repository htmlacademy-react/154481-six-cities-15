import { Helmet } from 'react-helmet-async';
import { GeneralOffer } from '../../components/types/offers';
import FavoritesList from '../../components/favorites-list/favorites-list';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type FavoritesPageProps = {
  offers: GeneralOffer[];
}

function FavoritesPage({ offers }: FavoritesPageProps): JSX.Element {
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
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </Link>
      </footer>
    </>
  );
}

export default FavoritesPage;
