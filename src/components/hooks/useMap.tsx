import { MutableRefObject, useEffect, useRef, useState } from 'react';
import L, { Map } from 'leaflet';
import { TOfferCity } from '../types/offers';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: TOfferCity): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = L
        .map(mapRef.current)
        .setView(
          [
            city.location.latitude,
            city.location.longitude
          ],
          city.location.zoom
        );

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [city, mapRef]);

  return map;
}

export default useMap;
