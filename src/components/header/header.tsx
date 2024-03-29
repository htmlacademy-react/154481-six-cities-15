import HeaderNav from '../header-nav/header-nav';
import Logo from '../logo/logo';

type HeaderProps = {
  showNav?: boolean;
}

function Header({ showNav = true }: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">

          <div className="header__left">
            <Logo />
          </div>

          {
            showNav && <HeaderNav />
          }

        </div>
      </div>
    </header>
  );
}

export default Header;
