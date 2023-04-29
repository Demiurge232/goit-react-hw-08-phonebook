import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppHeader from './AppHeader/AppHeader';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/auth-operatations';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Contacts from 'pages/Contacts';
// const Home = lazy(() => import('../pages/Home'));
// const Login = lazy(() => import('../pages/Login'));
// const Register = lazy(() => import('../pages/Register'));
// const Contacts = lazy(() => import('../pages/Contacts'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <AppHeader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}
