import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LayoutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin: 0 auto;
  gap: 48px;

  width: 1200px;
`;

export const Header = styled.header`
  position: fixed;
  display: flex;
  padding: 8px 24px;
  width: 1200px;
  height: 64px;
  border-radius: 8px;

  background-color: #ececec;
  /* box-shadow: rgb(125, 123, 131) -1px -1px 15px, rgb(255, 255, 255) 5px 5px 15px; */
`;

export const Navigation = styled.nav`
  display: flex;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const NavItem = styled.li``;

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

export const Main = styled.main`
  padding-top: 64px;
  padding-right: 24px;
  padding-left: 24px;
`;
