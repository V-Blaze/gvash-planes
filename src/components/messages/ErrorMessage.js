import PropTypes from 'prop-types';
import { IoIosAlert } from 'react-icons/io';

const ErrorMessage = ({ message }) => (
  <div className="bg-red-600 p-2 animate-left text-white w-full flex justify-center items-center gap-3 z-20" role="alert">
    <IoIosAlert />
    {message}
  </div>
);

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
