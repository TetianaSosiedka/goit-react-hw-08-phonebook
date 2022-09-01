import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = () => {
  const { token } = useSelector(state => state.user);

  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export const PublicRoute = (restricted = false) => {
  const { token } = useSelector(state => state.user);
  const conditionRedirect = token && restricted;

  return conditionRedirect ? <Navigate to="/contacts" replace /> : <Outlet />;
};
