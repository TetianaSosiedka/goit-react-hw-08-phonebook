import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useCurrentUserQuery } from '../../redux/userApi';
import { PrivateRoute, PublicRoute } from '../UserRoute';

import SharedLayout from '../SharedLayout';

const ContactsBook = lazy(() =>
  import('../../pages/contactsBook' /* webpackChunkName: "ContactsBook" */)
);
const AddContact = lazy(() =>
  import('../../pages/addContact' /* webpackChunkName: "AddContact" */)
);
const Login = lazy(() =>
  import('../../components/Login' /* webpackChunkName: "Login" */)
);
const Register = lazy(() =>
  import('../Register' /* webpackChunkName: "Register" */)
);
const Logout = lazy(() => import('../Logout' /* webpackChunkName: "Logout" */));

export const App = () => {
  const { token } = useSelector(state => state.user);

  useCurrentUserQuery(undefined, { skip: !token });

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="contacts" element={<ContactsBook />} />
          <Route path="add" element={<AddContact />} />
        </Route>
        <Route path="/" element={<PublicRoute restricted />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="logout" element={<Logout />} />
      </Route>
    </Routes>
  );
};
