import { AuthorizationStatus } from '../../const';
import SignoutLink from '../signout-link/signout-link';
import SigninLink from '../signin-link/signin-link';
import { useAppSelector } from '../hooks';
import { getAuthorizationStatus } from '../store/user-reducer/selectors';

function HeaderNav(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">

        <SigninLink isAuth={isAuth} />
        {isAuth && <SignoutLink />}

      </ul>
    </nav>
  );
}

export default HeaderNav;
