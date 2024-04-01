import L, { LayerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import useMap from '../hooks/useMap';
import { MapIcon } from '../../const';
import { TCity, TGeneralOffer } from '../types/offers';

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

type TMapProps = {
  offers: TGeneralOffer[];
  activeCardId: string | null;
  className: string;
}

function Map({ offers, activeCardId, className }: TMapProps): JSX.Element {
  const activeCity: TCity = offers[0].city;

  const mapRef = useRef(null);
  const map = useMap(mapRef, activeCity);
  const markerLayerRef = useRef<LayerGroup>(L.layerGroup());

  useEffect(() => {
    if (map) {
      map.setView(
        [
          activeCity.location.latitude,
          activeCity.location.longitude
        ],
        activeCity.location.zoom
      );
      markerLayerRef.current.addTo(map);
      markerLayerRef.current.clearLayers();
    }
  }, [activeCity, map]);

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
        ).addTo(markerLayerRef.current);
      });
    }
  }, [activeCardId, map, offers]);

  return (
    <section
      className={`${className} map`}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
