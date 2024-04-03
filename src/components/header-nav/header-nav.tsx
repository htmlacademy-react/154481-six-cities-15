import { AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../utils/utils';
import SignoutLink from '../signout-link/signout-link';
import SigninLink from '../signin-link/signin-link';

function HeaderNav(): JSX.Element {
  const authorizationStatus = getAuthorizationStatus();
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
