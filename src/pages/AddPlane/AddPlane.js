import React, { useState } from 'react';

// Components
import FormInput from '../../components/formInput/FormInput';

const AddPlane = () => {
  const planeFormData = {
    name: '',
    plane_type: '',
    description: '',
    image: '',
    price: 0,
    model: '',
    year_of_manufacture: '2000-04-06',
    life_span: '2030-04-06',
    fees: 0,
  };
  const [planeData, setPlaneData] = useState(planeFormData);

  const handleChange = (e) => {
    console.log(planeData, e.target.name);
    setPlaneData({ ...planeData, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 mt-[25%]">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <h1 className="flex font-secondary items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
          GVASH PLANES
        </h1>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create New plane
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleChange}>
              <div>
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
                />
                {/* {errors.name && <SmallErrorMessage message={errors.name} />} */}
              </div>

              <div>
                <FormInput
                  htmlFor="plane type"
                  spanText="Plane Type"
                  type="text"
                  id="plane_type"
                  name="plane_type"
                  placeholder="Private"
                  value={planeData.plane_type}
                  handleChange={handleChange}
                  autoComplete="plane_type"
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
                />
              </div>

              <div>
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
                />
              </div>

              <div>
                <FormInput
                  htmlFor="model"
                  spanText="Plane&apos;s Model<"
                  type="text"
                  name="model"
                  id="model"
                  placeholder="Enter plane's model"
                  value={planeData.model}
                  handleChange={handleChange}
                  autoComplete="model"
                />
              </div>

              <div>
                <FormInput
                  htmlFor="YOM"
                  spanText="Year Of Manufacture"
                  type="date"
                  id="date"
                  name="year_of_manufacture"
                  placeholder="Select date"
                  value={planeData.year_of_manufacture}
                  handleChange={handleChange}
                  autoComplete="date"
                />
              </div>

              <div>
                <FormInput
                  htmlFor="life_span"
                  spanText="Life Span"
                  type="date"
                  id="llife_span"
                  name="life_span"
                  placeholder="Enter Life span"
                  value={planeData.life_span}
                  handleChange={handleChange}
                  autoComplete="life_span"
                />
              </div>

              <div>
                <span htmlFor="fee" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fees</span>
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
