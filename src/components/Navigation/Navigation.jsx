import { useAuth } from 'hooks/useAuth';
import { NavMenu, StyledNavLink } from './Navigation.styled';

export default function Navigation() {
  const { isLoggedIn } = useAuth();

  return (
    <NavMenu>
      <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </NavMenu>
  );
}
