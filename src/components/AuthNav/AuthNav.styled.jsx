import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthNavMenu = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #cececf;

  background-color: #d2d8db;
  color: #5b5c6c;

  font-size: 20px;
  font-weight: 700;

  &:hover,
  &:focus {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &.active {
    background-color: #45e2a6;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border: 2px transparent #33c4c4;
  }
`;
