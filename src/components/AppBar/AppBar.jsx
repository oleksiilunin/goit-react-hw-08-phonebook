import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import { useAuth } from 'hooks/useAuth';
import { Header } from './AppBar.styled';
import UserMenu from 'components/UserMenu/UserMenu';

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
