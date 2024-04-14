import { useAppSelector } from '.';
import { AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../store/user-reducer/selectors';

function UseAuth(): boolean {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return authorizationStatus === AuthorizationStatus.Auth;
}

export default UseAuth;
