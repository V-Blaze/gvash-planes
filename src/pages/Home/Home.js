import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAlert } from '../../slices/appSlice/appSlice';
import { logout } from '../../slices/authSlice/authSlice';
import { planesThunk } from '../../slices/planeSlice/planeAPI';

const HomePage = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const planes = useSelector((state) => state.planes.planes);
  useEffect(() => {
    dispatch(planesThunk(token)).then((res) => {
      if (res.error) {
        dispatch(setAlert(res.payload));
      }
    });
  }, [dispatch, token]);
  return (
    <div>
      <h1>Home Page</h1>
      <button type="button" onClick={() => dispatch(logout())}>Logout</button>
      <ul>
        {planes.map((plane) => (<li key={plane.id}>{plane.id }</li>))}
      </ul>
    </div>
  );
};

export default HomePage;
