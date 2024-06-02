import SignoutLink from '../signout-link/signout-link';
import SigninLink from '../signin-link/signin-link';
import UseAuth from '../hooks/use-auth';
import { memo } from 'react';

function HeaderNav_(): JSX.Element {
  const isAuth = UseAuth();

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">

        <SigninLink isAuth={isAuth} />
        {isAuth && <SignoutLink />}

      </ul>
    </nav>
  );
}

const HeaderNav = memo(HeaderNav_);
export default HeaderNav;
