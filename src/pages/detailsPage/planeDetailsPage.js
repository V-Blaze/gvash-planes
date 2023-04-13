import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAlert, setNotice } from '../../slices/appSlice/appSlice';
import { planeThunk } from '../../slices/planeSlice/planeAPI';
import Loading from '../../components/Loading/Loading';
import { removePlane } from '../../api/planeApi/plane';

const PlaneDetailsPage = () => {
  const [removing, setRemoving] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const plane = useSelector((state) => state.planes.plane);
  const loading = useSelector((state) => state.planes.loading);
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const token = useSelector((state) => state.auth.token);
  const { id } = useParams();
  useEffect(() => {
    dispatch(planeThunk(id)).then((res) => {
      if (res.error) {
        dispatch(setAlert(res.payload));
      }
    });
  }, [dispatch]);

  const deletePlane = () => {
    setRemoving(true);
    removePlane(token, id).then((res) => {
      if (res.status === 204) {
        dispatch(setNotice('Plane deleted successfully'));
        navigate('/');
      } else {
        dispatch(setAlert('Deleting plane failed!'));
      }
      setRemoving(false);
    });
  };

  if (loading) return <Loading />;

  return (
    <div className="w-full py-10 mb-24 sm:px-[10%] px-5">
      <div className="w-full py-5 sm:pt-5 sm:pb-32 flex">
        <div className="w-70">
          <img src={plane?.attributes.image} alt={plane?.attributes.name} className="rounded h-100 border-4 border-blur" />
        </div>
        <div className="ml-2">
          <h1 className="uppercase m-auto w-fit font-secondary text-xl text-black">{plane?.attributes.name}</h1>
          <p className="pl-2 bg-gray-300">
            <strong>Plane type: </strong>
            {plane?.attributes.plane_type}
          </p>
          <p className="pl-2">
            <strong>Description: </strong>
            {plane?.attributes.description}
          </p>
          <p className="pl-2 bg-gray-300">
            <strong>Price: </strong>
            {plane?.attributes.price}
            {' '}
            $
          </p>
          <p className="pl-2">
            <strong>Model: </strong>
            {plane?.attributes.model}
            {' '}
          </p>
          <p className="pl-2 bg-gray-300">
            <strong>Year of manufacture: </strong>
            {plane?.attributes.year_of_manufacture}
          </p>
          <p className="pl-2">
            <strong>Life span: </strong>
            {plane?.attributes.life_span.slice(0, 10)}
            {' '}
          </p>
          <p className="pl-2 bg-gray-300">
            <strong>Fees: </strong>
            {plane?.attributes.fees}
            {' '}
            $
          </p>
          {isLoggedIn ? (
            <Link className="flex justify-center" to={`/planes_reservations/${id}`}>
              <button className="text-white bg-primary hover:bg-hoverPrimary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary mt-3" type="button">Reserve</button>
            </Link>
          ) : null}
          {
            isLoggedIn && user.id === 1 ? (
              <button onClick={deletePlane} className="deleta_plane" type="button" style={{ filter: removing ? 'blur(5px)' : '' }}>
                Delete plane
              </button>
            ) : null
          }
        </div>
      </div>
    </div>
  );
};

export default PlaneDetailsPage;
