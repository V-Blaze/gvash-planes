import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AiOutlineMenuUnfold } from 'react-icons/ai';

// Pages
import HomePage from './pages/Home/Home';
import AddPlane from './pages/AddPlane/AddPlane';
import Reservations from './pages/reservations/Resvervations';
import PlanesReservations from './pages/reservations/PlanesReservation';

// Auth-Pages
import Register from './pages/auth/Register/Register';
import Login from './pages/auth/Login/Login';
import AuthLayout from './pages/auth/Layout/Layout';

// Components
import AdminRoute from './components/ProtectedRoute/AdminRoute';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import ErrorMessage from './components/messages/ErrorMessage';
import NoticeMessage from './components/messages/NoticeMessage';
import Navbar from './components/Navbar/Navbar';
import { clearAll } from './slices/appSlice/appSlice';

// Stylesheet
import './App.css';

function App() {
  const [active, setActive] = useState(false);
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
    <div className="App font-primary mdl:grid mdl:grid-cols-[20%,_80%] md:grid bg-gray-50 sm:text-base text-xs">
      {alert && <ErrorMessage message={alert} />}
      {notice && <NoticeMessage message={notice} /> }
      <div className="">
        <Navbar
          active={active}
          setActive={setActive}
        />
      </div>
      <div>
        <AiOutlineMenuUnfold
          className="absolute top-6 left-4 mdl:hidden w-6 h-6 cursor-pointer hover:text-primary"
          onClick={() => setActive(!active)}
        />
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
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/planes_reservations" element={<PlanesReservations />} />
          </Route>

          {/* You can define admin routes here */}

          <Route element={<AdminRoute />}>
            {/* this is the example route and usage you can find how to use it in that component */}
            <Route path="/planes/new" element={<AddPlane />} />
          </Route>

          {/* 404 redirect to / */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
