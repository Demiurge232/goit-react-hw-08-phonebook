import { useDispatch, useSelector } from 'react-redux';
import { selectUsername } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operatations';
import { Flex, Text, Button } from '@chakra-ui/react';

export const UserMenu = () => {
  const name = useSelector(selectUsername);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <Flex gap="5px" justifyContent="center" alignItems="center">
      <Text>{name}</Text>
      <Button
        type="button"
        onClick={handleClick}
        colorScheme="green"
        size="sm"
        variant="ghost"
      >
        Logout
      </Button>
    </Flex>
  );
};
export default UserMenu;
