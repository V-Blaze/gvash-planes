import React, { useState } from 'react';
import * as Yup from 'yup';

// Components
import FormInput from '../../components/formInput/FormInput';
import SmallErrorMessage from '../../components/messages/SmallErrorMessage';

// Functions
import isValidImageUrl from '../../utils';

const CreatePlaneSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Name is Too Short!').max(50, 'Name is Too Long!').required('Name is Required'),
  planeType: Yup.string().min(2, 'Type is Too Short!').max(50, 'Type is Too Long!').required('Plane type is Required'),
  description: Yup.string().min(2, 'Name is Too Short!').required('Description is Required'),
  price: Yup.number().positive().integer().required('Price is required'),
  model: Yup.string().min(2, 'model is Too Short!').required('Model is Required'),
  yearOfManufacture: Yup.date().required('Y-O-M is required'),
  lifeSpan: Yup.string().required('Lifes Span is required'),
  fees: Yup.number().positive().integer().required('Fee is required'),
});

const AddPlane = () => {
  const planeFormData = {
    name: '',
    planeType: '',
    description: '',
    image: '',
    price: 0,
    model: '',
    yearOfManufacture: '2000-04-06',
    lifeSpan: '',
    fees: 0,
  };
  const [planeData, setPlaneData] = useState(planeFormData);
  const [errors, setErrors] = useState({});
  const [imageError, setImageError] = useState('');

  const handleChange = (e) => {
    console.log(planeData, e.target.name);
    setPlaneData({ ...planeData, [e.target.name]: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    setImageError('');

    const {
      name, planeType, description, price, model, yearOfManufacture, lifeSpan, fees,
    } = planeData;

    if (isValidImageUrl(planeData.image) !== true) {
      setImageError('Invalid image url');
      return;
    }

    CreatePlaneSchema.validate({
      name, planeType, description, price, model, yearOfManufacture, lifeSpan, fees,
    }, { abortEarly: false })
      .then((res) => {
        console.log(res);
        // dispatch(registerThunk(res)).then((res) => {
        //   if (res.error) {
        //     dispatch(setAlert(res.payload));
        //   } else {
        //     dispatch(setNotice('Register successful'));
        //   }
        // });
      }).catch((err) => {
        const newErrors = {};
        err.inner.forEach((error) => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
      });
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <h1 className="flex font-secondary items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
          GVASH PLANES
        </h1>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 px-[10%] md:px-[25%] dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create New plane
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handelSubmit}>
              <div className="grid lg:grid-cols-2 gap-2 grid-cols-1">
                <FormInput
                  htmlFor="name"
                  spanText="Plane&apos;s Name"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Plane's name"
                  value={planeData.name}
                  handleChange={handleChange}
                  autoComplete="name"
                  validateError={errors.name}
                />

                <FormInput
                  htmlFor="plane type"
                  spanText="Plane Type"
                  type="text"
                  id="planeType"
                  name="planeType"
                  placeholder="Private"
                  value={planeData.planeType}
                  handleChange={handleChange}
                  autoComplete="planeType"
                  validateError={errors.planeType}
                />
              </div>

              <div>
                <span htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Description</span>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Plane's description"
                  value={planeData.description}
                  onChange={(e) => handleChange(e)}
                  className="bg-gray-50 focus:shadow-focus border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  autoComplete="description"
                />
                {errors.description && <SmallErrorMessage message={errors.description} />}
              </div>

              <div>
                <FormInput
                  htmlFor="image URL"
                  spanText="Enter Image URL"
                  type="text"
                  name="image"
                  id="image"
                  placeholder="Enter a valid image url"
                  value={planeData.image}
                  handleChange={handleChange}
                  autoComplete="imageURL"
                  validateError={imageError}
                />
              </div>

              <div className="grid lg:grid-cols-2 gap-2 grid-cols-1">
                <FormInput
                  htmlFor="price"
                  spanText="Enter Plane Cost Price"
                  type="number"
                  name="price"
                  id="price"
                  placeholder="Enter Price"
                  value={planeData.price}
                  handleChange={handleChange}
                  autoComplete="price"
                  validateError={errors.price}
                />

                <FormInput
                  htmlFor="model"
                  spanText="Plane&apos;s Model"
                  type="text"
                  name="model"
                  id="model"
                  placeholder="Enter plane's model"
                  value={planeData.model}
                  handleChange={handleChange}
                  autoComplete="model"
                  validateError={errors.model}
                />
              </div>

              <div>
                <FormInput
                  htmlFor="YOM"
                  spanText="Year Of Manufacture"
                  type="date"
                  id="date"
                  name="yearOfManufacture"
                  placeholder="Select date"
                  value={planeData.yearOfManufacture}
                  handleChange={handleChange}
                  autoComplete="date"
                  validateError={errors.yearOfManufacture}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-2 grid-cols-1">
                <FormInput
                  htmlFor="lifeSpan"
                  spanText="Life Span"
                  type="text"
                  id="lifeSpan"
                  name="lifeSpan"
                  placeholder="Enter Life span e.g 10 years"
                  value={planeData.lifeSpan}
                  handleChange={handleChange}
                  autoComplete="lifeSpan"
                  validateError={errors.lifeSpan}
                />

                <FormInput
                  htmlFor="fees"
                  spanText="Fees"
                  type="number"
                  id="fees"
                  name="fees"
                  placeholder="Enter Other fees"
                  value={planeData.fees}
                  handleChange={handleChange}
                  autoComplete="fees"
                  validateError={errors.fees}
                />
              </div>

              <button type="submit" className="w-full text-white bg-primary hover:bg-hoverPrimary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary">Register</button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddPlane;
