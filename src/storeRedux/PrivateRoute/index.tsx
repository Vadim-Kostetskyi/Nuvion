import { JSX, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useVerifyQuery } from 'storeRedux/slyse/login';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const token =
    localStorage.getItem('token') || sessionStorage.getItem('token');

  const { data, isLoading, isError, refetch } = useVerifyQuery(undefined, {
    skip: !token,
  });

  useEffect(() => {
    if (token) refetch();
  }, [token, refetch]);

  // const path = import.meta.env.VITE_ROUTE_PATH;

  if (isLoading) return <div>Завантаження...</div>;
  if (isError || !data?.success) return <Navigate to={'/login'} />;

  return children;
};

export default PrivateRoute;
