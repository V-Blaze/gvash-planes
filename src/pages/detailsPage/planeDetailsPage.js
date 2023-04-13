import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAlert } from '../../slices/appSlice/appSlice';
import { planeThunk } from '../../slices/planeSlice/planeAPI';
import Loading from '../../components/Loading/Loading';

const PlaneDetailsPage = () => {
  const dispatch = useDispatch();
  const plane = useSelector((state) => state.plane.plane);
  const loading = useSelector((state) => state.plane.loading);
  useEffect(() => {
    dispatch(planeThunk()).then((res) => {
      if (res.error) {
        dispatch(setAlert(res.payload));
      }
    });
  }, [dispatch]);

  if (loading) return <Loading />;

  return (
    <div className="w-full py-10 mb-24 sm:px-[10%] px-5">
      <div className="w-full py-5 sm:pt-5 sm:pb-32 flex">
        <div className="w-70">
          <img src={plane.image} alt={plane.name} className="rounded border-4 border-blur hover:opacity-50" />
        </div>
        <div>
          <h1 className="uppercase m-auto w-fit font-secondary text-xl">{plane.name}</h1>
          <p className="bg-gray-100">
            Plane type:
            {plane.plane_type}
          </p>
          <p>
            Description:
            {plane.description}
          </p>
          <p className="bg-gray-100">
            Price:
            {plane.price}
            {' '}
            $
          </p>
          <p>
            Model:
            {plane.model}
            {' '}
            km
          </p>
          <p className="bg-gray-100">
            Year of manifacture:
            {plane.year_of_manifacture}
          </p>
          <p>
            Life span:
            {plane.life_span}
            {' '}
            years
          </p>
          <p className="bg-gray-100">
            Fees:
            {plane.life_span}
            {' '}
            $
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlaneDetailsPage;
