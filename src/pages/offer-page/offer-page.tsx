import { Helmet } from 'react-helmet-async';
import Host from '../../components/host/host';
import OfferInside from '../../components/offer-inside/offer-inside';
import { convertRatingToPercantage } from '../../utils/utils';
import Reviews from '../../components/reviews/reviews';
import Map from '../../components/map/map';
import PlaceCard from '../../components/place-card/place-card';
import { CardType } from '../../const';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../components/hooks';
import { fetchNearbyOffersAction, fetchOfferACtion } from '../../components/store/thunks/offers';
import { useParams } from 'react-router-dom';
import { getNearbyOffers, getNearbyOffersDataLoadingStatus, getOffer, getOfferDataLoadingStatus } from '../../components/store/data-reducer/selectors';
import LoadingPage from '../loading-page/loading-page';
import NotFoundPage from '../not-found-page/not-found-page';

const MAX_NEARBY_OFFERS_AMOUNT = 3;

function OfferPage(): JSX.Element {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const offer = useAppSelector(getOffer);
  const offersNearby = useAppSelector(getNearbyOffers);
  const isOfferDataLoading = useAppSelector(getOfferDataLoadingStatus);
  const isNearByOffersDataLoading = useAppSelector(getNearbyOffersDataLoadingStatus);

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferACtion(id));
      dispatch(fetchNearbyOffersAction(id));
    }
  }, [dispatch, id]);

  if (isOfferDataLoading || isNearByOffersDataLoading) {
    return <LoadingPage />;
  }

  if (!offer) {
    return <NotFoundPage />;
  }

  const offersNearbySliced = offersNearby.slice(0, MAX_NEARBY_OFFERS_AMOUNT);
  const { images, isPremium, title, type, bedrooms, maxAdults, price, goods, host, rating, description } = offer;

  return (
    <main className="page__main page__main--offer">
      <Helmet>
        <title>6 cities. Offer</title>
      </Helmet>

      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {
              images.map((img) => (
                <div
                  key={img}
                  className="offer__image-wrapper"
                >
                  <img
                    className="offer__image"
                    src={img}
                    alt="Photo studio"
                  />
                </div>
              ))
            }
          </div>
        </div>

        <div className="offer__container container">
          <div className="offer__wrapper">
            {
              isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )
            }
            <div className="offer__name-wrapper">
              <h1 className="offer__name">{title}</h1>
              <button className="offer__bookmark-button button" type="button">
                <svg className="offer__bookmark-icon" width={31} height={33}>
                  <use xlinkHref="#icon-bookmark" />
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{ width: `${convertRatingToPercantage(rating)}%` }} />
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">{rating}</span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">{type}</li>
              <li className="offer__feature offer__feature--bedrooms">
                {bedrooms} Bedrooms
              </li>
              <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adults
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">€{price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>

            <OfferInside goods={goods} />
            <Host host={host} description={description} />

            <Reviews />

          </div>
        </div>

        <Map
          activeCardId={offer.id}
          offers={[...offersNearbySliced, offer]}
          className='offer__map'
        />

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
            Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {
                offersNearbySliced.map((offerNearby) => (
                  <PlaceCard
                    key={offerNearby.id}
                    cardType={CardType.PlacesNearby}
                    offer={offerNearby}
                  />
                ))
              }
            </div>
          </section>
        </div>

      </section>
    </main>
  );
}

export default OfferPage;
