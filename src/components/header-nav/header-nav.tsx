import SignoutLink from '../signout-link/signout-link';
import SigninLink from '../signin-link/signin-link';
import UseAuth from '../hooks/use-auth';

function HeaderNav(): JSX.Element {
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

export default HeaderNav;
