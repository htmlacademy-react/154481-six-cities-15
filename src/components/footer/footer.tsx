import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { memo } from 'react';

function Footer_(): JSX.Element {
  return (
    <footer className="footer container">
      <Link className="footer__logo-link" to={AppRoute.Main}>
        <img
          className="footer__logo"
          src="img/logo.svg"
          alt="6 cities logo"
          width={64}
          height={33}
        />
      </Link>
    </footer>
  );
}

const Footer = memo(Footer_);
export default Footer;
