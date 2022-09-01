import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMenu from '../UserMenu';

import {
  Li,
  Header,
  Container,
  Logo,
  HeaderContainer,
} from './SharedLayout.styled';

import Loader from '../Loader';

const SharedLayout = () => {
  const { token } = useSelector(state => state.user);

  return (
    <>
      <Header>
        <HeaderContainer>
          <Logo>Phonebook</Logo>
          <nav>
            {token && (
              <ul>
                <Li>
                  <NavLink to="/contacts">Contacts</NavLink>
                </Li>
                <Li>
                  <NavLink to="/add">Add Contact</NavLink>
                </Li>
              </ul>
            )}
          </nav>
          <UserMenu />
        </HeaderContainer>
      </Header>
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
export default SharedLayout;
