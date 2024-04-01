import { Link } from 'react-router-dom';
import { Cities } from '../../const';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../hooks';
import { changeCity } from '../store/action';

function LocationsList(): JSX.Element {
  const activeCity = useAppSelector((state) => state.activeCity);
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
              onClick={() => dispatch(changeCity(city))}
            >
              <Link className={linkClass} to="#">
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
