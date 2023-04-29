import { useSelector } from 'react-redux';
import UserMenu from './UserMenu/UserMenu';
import authSelectors from 'redux/auth/auth-selectors';
import Navigation from './Navigation/Navigation';
import AuthNav from './AuthNav/AuthNav';
export const AppHeader = () => {
  const isLoggedIn = useSelector(authSelectors.selectUsername);

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
export default AppHeader;
