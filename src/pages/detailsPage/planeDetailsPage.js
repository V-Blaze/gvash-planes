import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAlert } from '../../slices/appSlice/appSlice';
import { planeThunk } from '../../slices/planeSlice/planeAPI';
import Loading from '../../components/Loading/Loading';


const PlaneDetailsPage = () => {
  const dispatch = useDispatch();
  const plane = useSelector((state) => state.planes.plane);
  const loading = useSelector((state) => state.planes.loading);
  const {id} = useParams();
  useEffect(() => {
    dispatch(planeThunk(id)).then((res) => {
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
        <img src={plane?.attributes.image} alt={plane?.attributes.name} className="rounded h-100 border-4 border-blur" />
        </div>
        <div className='ml-2'>
          <h1 className="uppercase m-auto w-fit font-secondary text-xl text-black">{plane?.attributes.name}</h1>
          <p className="bg-gray-300">
            Plane type:
            {plane?.attributes.plane_type}
          </p>
          <p>
            Description:
            {plane?.attributes.description}
          </p>
          <p className="bg-gray-300">
            Price:
            {plane?.attributes.price}
            {' '}
            $
          </p>
          <p>
            Model:
            {plane?.attributes.model}
            {' '}
          </p>
          <p className="bg-gray-300">
            Year of manufacture:
            {plane?.attributes.year_of_manufacture}
          </p>
          <p>
            Life span:
            {plane?.attributes.life_span.slice(0,10)}
            {' '}
          </p>
          <p className="bg-gray-300">
            Fees:
            {plane?.attributes.fees}
            {' '}
            $
          </p>
          <Link className='flex justify-center' to={`/planes_reservations/${plane?.id}`}>
            <button className='text-white bg-primary hover:bg-hoverPrimary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary mt-3'>Reserve</button>
          </Link>
        </div>
      </div>
    </div>
  ); 
};

export default PlaneDetailsPage;
