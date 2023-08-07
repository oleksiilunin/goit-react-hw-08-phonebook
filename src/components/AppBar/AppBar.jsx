import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import Navigation from 'components/Navigation/Navigation';
import { Header } from './AppBar.styled';

import { useAuth } from 'hooks/useAuth';

export default function AppBar() {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
  // <Header>
  //   <Navigation>
  //     <NavList>
  //       <NavItem>
  //         <StyledNavLink to="/">Home</StyledNavLink>
  //       </NavItem>
  //       <NavItem>
  //         <StyledNavLink to="/movie">Movies</StyledNavLink>
  //       </NavItem>
  //     </NavList>
  //   </Navigation>
  // </Header>
}
