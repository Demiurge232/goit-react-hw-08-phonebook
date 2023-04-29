import { NavLink } from 'react-router-dom';
export const Navigation = () => {
  return (
    <div>
      <nav>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
        </ul>
      </nav>
    </div>
  );
};
export default Navigation;
