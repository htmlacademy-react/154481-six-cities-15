import { Link } from 'react-router-dom';
import { Cities } from '../../const';
import classNames from 'classnames';

function LocationsList(): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {
        Object.keys(Cities).map((city) => {
          const linkClass = classNames({
            'locations__item-link tabs__item': true,
            'locations__item-link tabs__item--active': city === Object.keys(Cities)[0]
          });

          return (
            <li
              key={city}
              className="locations__item"
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
