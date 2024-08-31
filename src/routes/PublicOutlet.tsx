import { useAuth } from '../hooks/useAuth.ts';
import { Navigate, Outlet } from 'react-router-dom';

export const PublicOutlet = () => {
  const auth = useAuth();

  return auth.user ? <Navigate to='/conversation' replace /> : <Outlet />;
};
