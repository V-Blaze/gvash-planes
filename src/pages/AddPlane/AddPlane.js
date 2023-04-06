import React, { useState } from 'react';

const AddPlane = () => {
  const planeFormData = {
    name: 'Boeing 747',
    plane_type: 'Commercial',
    description: 'The Boeing 747 is a large, long-range wide-body airliner.',
    image: 'https://example.com/boeing-747.jpg',
    price: 1_000_000,
    model: '747-400',
    year_of_manufacture: '20-05-2022',
    life_span: '12:30:00',
    fees: 1000.0,
  };
  const [planeData, setPlaneData] = useState(planeFormData);

  const handleChange = (e) => {
    console.log(planeData, e.target.name);
    setPlaneData('');
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
                <span htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Plane&apos;s Name
                </span>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Plane's name"
                  value={planeData.name}
                //   onChange={(e) => setName(e.target.value)}
                  className="bg-gray-50 focus:shadow-focus border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  autoComplete="name"
                />
                {/* {errors.name && <SmallErrorMessage message={errors.name} />} */}
              </div>

              <div>
                <span htmlFor="plane type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Plane Type</span>
                <input
                  type="text"
                  id="plane_type"
                  placeholder="Private"
                  value={planeData.plane_type}
                //   onChange={(e) => setName(e.target.value)}
                  className="bg-gray-50 focus:shadow-focus border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  autoComplete="plane_type"
                />
                {/* {errors.name && <SmallErrorMessage message={errors.name} />} */}
              </div>

              <div>
                <span htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Description</span>
                <textarea
                  id="description"
                  placeholder="Plane's description"
                  value={planeData.description}
                //   onChange={(e) => setName(e.target.value)}
                  className="bg-gray-50 focus:shadow-focus border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  autoComplete="description"
                />
                {/* {errors.name && <SmallErrorMessage message={errors.name} />} */}
              </div>

              <div>
                <span htmlFor="image URL" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Image URL</span>
                <input
                  type="text"
                  id="image"
                  placeholder="Enter a valid image url"
                  value={planeData.image}
                //   onChange={(e) => setName(e.target.value)}
                  className="bg-gray-50 focus:shadow-focus border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  autoComplete="imageURL"
                />
                {/* {errors.name && <SmallErrorMessage message={errors.name} />} */}
              </div>

              <div>
                <span htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Plane Cost Price</span>
                <input
                  type="number"
                  id="price"
                  placeholder="Enter Price"
                  value={planeData.price}
                //   onChange={(e) => setName(e.target.value)}
                  className="bg-gray-50 focus:shadow-focus border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  autoComplete="price"
                />
                {/* {errors.name && <SmallErrorMessage message={errors.name} />} */}
              </div>

              <div>
                <span htmlFor="model" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Plane&apos;s Model</span>
                <input
                  type="text"
                  id="model"
                  placeholder="Enter plane's model"
                  value={planeData.model}
                //   onChange={(e) => setName(e.target.value)}
                  className="bg-gray-50 focus:shadow-focus border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  autoComplete="model"
                />
                {/* {errors.name && <SmallErrorMessage message={errors.name} />} */}
              </div>

              <div>
                <span htmlFor="Y-O-M" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year Of Manufacture</span>
                <input
                  type="date"
                  id="date"
                  placeholder="Select date"
                  value={planeData.year_of_manufacture}
                //   onChange={(e) => setName(e.target.value)}
                  className="bg-gray-50 focus:shadow-focus border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  autoComplete="date"
                />
                {/* {errors.name && <SmallErrorMessage message={errors.name} />} */}
              </div>

              <div>
                <span htmlFor="life_span" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Life Span</span>
                <input
                  type="date"
                  id="llife_span"
                  placeholder="Enter Life span"
                  value={planeData.life_span}
                //   onChange={(e) => setName(e.target.value)}
                  className="bg-gray-50 focus:shadow-focus border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  autoComplete="life_span"
                />
                {/* {errors.name && <SmallErrorMessage message={errors.name} />} */}
              </div>

              <div>
                <span htmlFor="fee" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fees</span>
                <input
                  type="number"
                  id="fees"
                  placeholder="Enter Other fees"
                  value={planeData.fees}
                //   onChange={(e) => setName(e.target.value)}
                  className="bg-gray-50 focus:shadow-focus border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  autoComplete="fees"
                />
                {/* {errors.name && <SmallErrorMessage message={errors.name} />} */}
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
