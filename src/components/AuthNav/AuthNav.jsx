import { NavLink } from 'react-router-dom';
import { Link, List, ListItem } from '@chakra-ui/react';
export const AuthNav = () => {
  return (
    <List
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap="10px"
      marginRight="20px"
    >
      <ListItem>
        <Link as={NavLink} to="/login">
          Log in
        </Link>
      </ListItem>
      <ListItem>
        <Link as={NavLink} to="/register">
          Register
        </Link>
      </ListItem>
    </List>
  );
};
export default AuthNav;
