import classNames from 'classnames';
import { PlacesSort } from '../../const';
import { useState } from 'react';

type TPlacesSortingProps = {
  activeSort: string;
  handleSortChange: (sort: string) => void;
}

function PlacesSorting({activeSort, handleSortChange}: TPlacesSortingProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const handleSortClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleSortOptionClick = (sort: string) => {
    handleSortChange(sort);
    handleSortClick();
  };

  return (
    <form className="places__sorting" action="#" method="get">

      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleSortClick}
      >
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>

      <ul
        className={classNames({
          'places__options places__options--custom': true,
          'places__options--opened': isOpen,
        })}
      >
        {
          Object.values(PlacesSort).map((sort: string) => (
            <li
              key={sort}
              className=
                {
                  classNames({
                    'places__option': true,
                    'places__option--active': sort === activeSort
                  })
                }
              tabIndex={0}
              onClick={() => handleSortOptionClick(sort)}
            >
              {sort}
            </li>
          ))
        }
      </ul>

    </form>
  );
}

export default PlacesSorting;
