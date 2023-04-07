import React from 'react';
import PropTypes from 'prop-types';

// Component
import SmallErrorMessage from '../messages/SmallErrorMessage';

const FormInput = ({
  type, id, name, placeholder, value, handleChange, autoComplete, htmlFor, spanText, validateError,
}) => {
  const inputStyle = 'bg-gray-50 focus:shadow-focus border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
  return (
    <div>
      <span htmlFor={htmlFor} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {spanText}
      </span>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        className={inputStyle}
        onChange={(e) => handleChange(e)}
        autoComplete={autoComplete}
      />
      {validateError && <SmallErrorMessage message={validateError} />}
    </div>
  );
};

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  handleChange: PropTypes.func.isRequired,
  autoComplete: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  spanText: PropTypes.string.isRequired,
  validateError: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([undefined]),
  ]),
};

FormInput.defaultProps = {
  validateError: null,
};

export default FormInput;
