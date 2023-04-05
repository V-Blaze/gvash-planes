import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Login from './pages/auth/Login/Login';
import AuthLayout from './pages/auth/Layout/Layout';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import HomePage from './pages/Home/Home';
import Register from './pages/auth/Register/Register';
import ErrorMessage from './components/messages/ErrorMessage';
import NoticeMessage from './components/messages/NoticeMessage';
import { clearAll } from './slices/appSlice/appSlice';

function App() {
  const alert = useSelector((state) => state.app.alert);
  const notice = useSelector((state) => state.app.notice);
  const dispatch = useDispatch();
  // remove the alert and notice after 10 seconds
  useEffect(() => {
    if (alert || notice) {
      setTimeout(() => {
        dispatch(clearAll());
      }, 10000);
    }
  });
  return (
    <div className="App font-primary">
      {alert && <ErrorMessage message={alert} />}
      {notice && <NoticeMessage message={notice} /> }
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* guests routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        {/* protected routes aka users routes */}
        <Route element={<ProtectedRoute />}>
          {/* this is the example route and usage you can find how to use it in that component */}
          <Route path="/user" element={<HomePage />} />
        </Route>

        {/* You can define admin routes here */}

        {/* 404 redirect to / */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

    </div>
  );
}

export default App;
