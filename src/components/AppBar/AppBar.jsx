import UserMenu from '../UserMenu/UserMenu';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { Flex } from '@chakra-ui/react';
export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Flex
      as="header"
      justifyContent="space-between"
      backgroundColor="lightGreen"
      w="100%"
      h="40px"
    >
      <Navigation />

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Flex>
  );
};
export default AppBar;
