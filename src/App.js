import { useSelector } from 'react-redux';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/auth/Login/Login';
import AuthLayout from './pages/auth/Layout/Layout';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import HomePage from './pages/Home/Home';
import Register from './pages/auth/Register/Register';

function App() {
  const alert = useSelector((state) => state.app.alert);
  const notice = useSelector((state) => state.app.notice);
  return (
    <div className="App">
      {alert && <div className="text-red-500">{alert}</div>}
      {notice && <div className="text-green-500">{notice}</div>}
      <Routes>
        <Route path="/" element={<h1 className="text-3xl text-red-500 font-bold underline">Gvash planes</h1>} />
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<HomePage />} />
        </Route>

      </Routes>

    </div>
  );
}

export default App;
