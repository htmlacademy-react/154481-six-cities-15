import { Outlet, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';
import Logo from '../logo/logo';
import HeaderNav from '../header-nav/header-nav';

const getLayout = (pathname: AppRoute) => {
  const layoutSettings = {
    pageClass: '',
    showNav: true,
  };

  if (pathname === AppRoute.Main) {
    layoutSettings.pageClass = 'page--gray page--main';
  } else if (pathname === AppRoute.Login) {
    layoutSettings.pageClass = 'page--gray page--login';
    layoutSettings.showNav = false;
  }

  return layoutSettings;
};

function Layout(): JSX.Element {
  const { pathname } = useLocation();
  const layoutSettings = getLayout(pathname as AppRoute);

  return (
    <div className={`page ${layoutSettings.pageClass}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">

            <div className="header__left">
              <Logo />
            </div>

            {
              layoutSettings.showNav && <HeaderNav />
            }

          </div>
        </div>
      </header>

      <Outlet />
    </div>
  );
}

export default Layout;
