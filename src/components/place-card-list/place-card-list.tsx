import { CardType } from '../../const';
import PlaceCard from '../place-card/place-card';
import { TGeneralOffer } from '../types/offers';

type TPlaceCardListProps = {
  offers: TGeneralOffer[];
  handleCardHover: (id?: string) => void;
}

function PlaceCardList({ offers, handleCardHover }: TPlaceCardListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <PlaceCard
            key={offer.id}
            offer={offer}
            cardType={CardType.Cities}
            handleCardHover={handleCardHover}
          />
        ))
      }
    </div>
  );
}

export default PlaceCardList;
