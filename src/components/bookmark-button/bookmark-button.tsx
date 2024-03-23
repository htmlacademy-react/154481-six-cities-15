import classNames from 'classnames';

type BookmarkButtonProps = {
  isFavorite: boolean;
}

function BookmarkButton({ isFavorite }: BookmarkButtonProps): JSX.Element {
  const buttonClass = classNames({
    'place-card__bookmark-button button': true,
    'place-card__bookmark-button--active': isFavorite
  });

  const buttonText = isFavorite ? 'In bookmarks' : 'To bookmarks';

  return (
    <button className={buttonClass} type="button">
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{buttonText}</span>
    </button>
  );
}

export default BookmarkButton;
