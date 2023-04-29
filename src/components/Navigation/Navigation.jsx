import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Breadcrumb display="flex">
      <BreadcrumbItem>
        <BreadcrumbLink as={NavLink} to="/">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        {isLoggedIn && (
          <BreadcrumbLink as={NavLink} to="/contacts">
            Contacts
          </BreadcrumbLink>
        )}
      </BreadcrumbItem>
    </Breadcrumb>
  );
};
export default Navigation;
