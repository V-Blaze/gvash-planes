import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAlert } from '../../slices/appSlice/appSlice';
import { planesThunk } from '../../slices/planeSlice/planeAPI';
import PlaneCard from '../../components/plane/PlaneCard';
import Loading from '../../components/Loading/Loading';

const HomePage = () => {
  const dispatch = useDispatch();
  const planes = useSelector((state) => state.planes.planes);
  const loading = useSelector((state) => state.planes.loading);
  useEffect(() => {
    dispatch(planesThunk()).then((res) => {
      if (res.error) {
        dispatch(setAlert(res.payload));
      }
    });
  }, [dispatch]);

  if (loading) return <Loading />;

  return (
    <div className="w-full py-10 mb-24 sm:px-[10%] px-5">
      <div className="w-full py-5 sm:pt-5 sm:pb-32">
        <h1 className="uppercase m-auto w-fit font-secondary text-xl">Latest Models</h1>
        <span className="m-auto w-fit block text-secondary">
          Please select a model from the following
          {' '}
          <span>models</span>
          {' '}
        </span>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(300px,_1fr))] gap-9">
        {planes.map((plane) => (
          <li key={Number(plane.id)}>
            <PlaneCard id={Number(plane.id)} plane={plane.attributes} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
