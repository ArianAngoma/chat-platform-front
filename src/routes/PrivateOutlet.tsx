import { useLocation, Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.ts';

export const PrivateOutlet = () => {
  const auth = useAuth();
  const location = useLocation();

  return auth.user ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: location }} />
  );
};
