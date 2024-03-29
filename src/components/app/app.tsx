import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import { AppRoute } from '../../const';
import OfferPage from '../../pages/offer-page/offer-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { FakeOffer } from '../mocks/offers';
import Layout from '../layout/layout';
import { getAuthorizationStatus } from '../../utils/utils';
import { HelmetProvider } from 'react-helmet-async';
import { GeneralOffer } from '../types/offers';

type AppProps = {
  offers: GeneralOffer[];
}

function App({ offers }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<Layout />}
          >
            <Route
              index
              element={<MainPage offers={offers} />}
            />
            <Route
              path={AppRoute.Offer}
              element={<OfferPage offer={FakeOffer} />}
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authorizationStatus={getAuthorizationStatus()}>
                  <FavoritesPage offers={offers} />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Login}
              element={<LoginPage />}
            />
            <Route
              path='*'
              element={<NotFoundPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
