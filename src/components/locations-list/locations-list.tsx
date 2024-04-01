import { Link } from 'react-router-dom';
import { AppRoute, Cities } from '../../const';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getActiveCity } from '../store/interface-reducer/selectors';
import { setCity } from '../store/interface-reducer/interface-reducer';

function LocationsList(): JSX.Element {
  const activeCity = useAppSelector(getActiveCity);
  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list">
      {
        Object.values(Cities).map((city: string) => {
          const linkClass = classNames({
            'locations__item-link tabs__item': true,
            'locations__item-link tabs__item--active': city === activeCity
          });

          return (
            <li
              key={city}
              className="locations__item"
              onClick={() => dispatch(setCity(city))}
            >
              <Link className={linkClass} to={AppRoute.Main}>
                <span>{city}</span>
              </Link>
            </li>
          );
        })
      }
    </ul>
  );
}

export default LocationsList;
