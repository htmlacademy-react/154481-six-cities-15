import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../utils/utils';

function HeaderNav(): JSX.Element {
  const authorizationStatus = getAuthorizationStatus();

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to="#">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            {
              authorizationStatus === AuthorizationStatus.Auth
                ? (
                  <>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </>
                )
                : (
                  <span className="header__login">Sign in</span>
                )
            }
          </Link>
        </li>
        {
          authorizationStatus === AuthorizationStatus.Auth && (
            <li className="header__nav-item">
              <Link className="header__nav-link" to="#">
                <span className="header__signout">Sign out</span>
              </Link>
            </li>
          )
        }

      </ul>
    </nav>
  );
}

export default HeaderNav;
