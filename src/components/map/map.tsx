import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import useMap from '../hooks/useMap';
import { MapIcon } from '../../const';
import { TCity, TGeneralOffer } from '../types/offers';

type TMapProps = {
  offers: TGeneralOffer[];
  activeCardId: string | null;
}

function Map({ offers, activeCardId }: TMapProps): JSX.Element {
  const activeCity: TCity = offers[0].city;

  const mapRef = useRef(null);
  const map = useMap(mapRef, activeCity);

  const defaultMarker = L.icon({
    iconUrl: MapIcon.Default.Url,
    iconSize: [MapIcon.Default.Size[0], MapIcon.Default.Size[1]],
    iconAnchor: [MapIcon.Default.Anchor[0], MapIcon.Default.Anchor[1]]
  });

  const activeMarker = L.icon({
    iconUrl: MapIcon.Active.Url,
    iconSize: [MapIcon.Active.Size[0], MapIcon.Active.Size[1]],
    iconAnchor: [MapIcon.Active.Anchor[0], MapIcon.Active.Anchor[1]]
  });

  useEffect(() => {
    if (map) {
      offers.forEach(({location, id}) => {
        L.marker(
          [
            location.latitude,
            location.longitude
          ],
          {
            icon: activeCardId && id === activeCardId ? activeMarker : defaultMarker
          }
        ).addTo(map);
      });
    }
  }, [activeCardId, activeMarker, defaultMarker, map, offers]);

  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
}

export default Map;
