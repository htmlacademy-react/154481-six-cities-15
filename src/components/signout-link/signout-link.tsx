import { Link } from 'react-router-dom';
import { useAppDispatch } from '../hooks';
import { MouseEvent } from 'react';
import { logoutAction } from '../store/thunks/user';

function SignoutLink(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleSignout = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <li className="header__nav-item">
      <Link
        className="header__nav-link"
        to="#"
        onClick={handleSignout}
      >
        <span className="header__signout">Sign out</span>
      </Link>
    </li>
  );
}

export default SignoutLink;
