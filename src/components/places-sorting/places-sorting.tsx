import classNames from 'classnames';
import { PlacesSort } from '../../const';

function PlacesSorting(): JSX.Element {
  return (
    <form className="places__sorting" action="#" method="get">

      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>

      <ul className="places__options places__options--custom places__options--opened">
        {
          Object.values(PlacesSort).map((sort) => {
            const optionClass = classNames({
              'places__option': true,
              'places__option--active': sort === PlacesSort.Popular
            });

            return (
              <li
                key={sort}
                className={optionClass}
                tabIndex={0}
              >
                {sort}
              </li>
            );
          })
        }
      </ul>

    </form>
  );
}

export default PlacesSorting;
