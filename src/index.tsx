import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { FakeOffers } from './components/mocks/offers';
import { Provider } from 'react-redux';
import { store } from './components/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={FakeOffers} />
    </Provider>
  </React.StrictMode>
);
