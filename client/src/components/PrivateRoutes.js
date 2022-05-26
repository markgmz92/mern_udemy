import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoutes() {
  const user = localStorage.getItem('userInfo');
  return <>{user ? <Outlet /> : <Navigate to='/login' />}</>;
}
