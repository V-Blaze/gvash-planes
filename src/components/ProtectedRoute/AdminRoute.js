import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

// Actions
import { setAlert } from '../../slices/appSlice/appSlice';

const AdminRoute = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userID = useSelector((state) => state.auth.user.id);

  console.log(userID);
  if (!isLoggedIn || userID !== 1) {
    dispatch(setAlert('You Dont have enough permission to view this page'));
    return <Navigate to="/home" />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default AdminRoute;
