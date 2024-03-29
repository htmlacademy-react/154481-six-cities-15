import PlaceCard from '../place-card/place-card';
import { GeneralOffer } from '../types/offers';

type PlaceCardListProps = {
  offers: GeneralOffer[];
  handleCardMouseOver: (id: string) => void;
}

function PlaceCardList({ offers, handleCardMouseOver }: PlaceCardListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <PlaceCard
            key={offer.id}
            offer={offer}
            handleCardMouseOver={handleCardMouseOver}
          />
        ))
      }
    </div>
  );
}

export default PlaceCardList;
