import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type TSigninLinkProps = {
  isAuth: boolean;
}

function SigninLink({ isAuth }: TSigninLinkProps): JSX.Element {
  return (
    <li className="header__nav-item user">
      <Link
        className="header__nav-link header__nav-link--profile"
        to={isAuth ? AppRoute.Favorites : AppRoute.Login}
      >
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        {
          isAuth
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
  );
}

export default SigninLink;
