import { Route, Routes } from 'react-router-dom';
import AppBar from './AppBar/AppBar';

import { useDispatch } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { getCurrentUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selector';
import { useSelector } from 'react-redux';

import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';

const Home = lazy(() => import('../pages/Home/Home'));
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isRefreshing && (
        <Suspense fallback={<div>Loadind...</div>}>
          <Routes>
            <Route path="/" element={<AppBar />}>
              <Route index element={<Home />} />
              <Route
                path="contacts"
                element={
                  <PrivateRoute redirectTo="/login">
                    <Contacts />
                  </PrivateRoute>
                }
              />
              <Route
                path="register"
                element={
                  <PublicRoute redirectTo="/contacts">
                    <Register />
                  </PublicRoute>
                }
              />
              <Route
                path="login"
                element={
                  <PublicRoute redirectTo="/contacts">
                    <Login />
                  </PublicRoute>
                }
              />
            </Route>
          </Routes>
        </Suspense>
      )}
    </>
  );
};
