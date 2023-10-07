import AppBar from 'components/AppBar/AppBar';
import Loader from 'components/Loader/Loader';
import { GlobalStyles } from 'components/GlobalStyles';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  // Header,
  LayoutContainer,
  Main,
  // NavItem,
  // NavList,
  // Navigation,
  // StyledNavLink,
} from './Layout.styled';

export default function Layout() {
  return (
    <>
      <LayoutContainer>
        <AppBar />
        <Main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Main>
        {/* <footer>Footer</footer> */}
      </LayoutContainer>
      <GlobalStyles />
      <ToastContainer />
    </>
  );
}
