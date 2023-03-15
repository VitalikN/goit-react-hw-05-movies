import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Main, Header, StyledLink } from './SharedLayout.styled';
export const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Main>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};
