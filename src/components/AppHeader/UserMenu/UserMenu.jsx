import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operatations';

export const UserMenu = () => {
  const name = useSelector(authSelectors.selectUsername);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <p>{name}</p>
      <button type="button" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
