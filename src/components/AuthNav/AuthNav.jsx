import { AuthNavMenu, StyledNavLink } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <AuthNavMenu>
      <StyledNavLink to="/login">Log In</StyledNavLink>
      <StyledNavLink to="/register">Register</StyledNavLink>
    </AuthNavMenu>
  );
}
