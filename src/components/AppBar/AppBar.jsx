import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';

export default function AppBar() {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Navigation />

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
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
