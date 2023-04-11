import PropTypes from 'prop-types';
import { RiFacebookFill, RiTwitterFill, RiInstagramFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const PlaneCard = ({ plane, id }) => (
  <>
    <Link to={`plane/${id}`}>
      <img src={plane.image} alt={plane.name} className="rounded hover:opacity-50" />
    </Link>
    <Link to={`plane/${id}`} className="link pt-2 pb-4">

      <h2 className="py-2">{plane.name}</h2>
    </Link>
    <p className="text-secondary text-xs sm:text-base text-center py-2">{plane.description}</p>
    <ul className="flex flex-row justify-center items-center gap-6">
      <li>
        <a href="https://facebook.com/" className="hover:text-primary">
          <RiFacebookFill />
        </a>

      </li>
      <li>
        <a href="https://twitter.com/" className="hover:text-primary">
          <RiTwitterFill />
        </a>

      </li>
      <li>
        <a href="https://instagram.com/" className="hover:text-primary">
          <RiInstagramFill />
        </a>

      </li>
    </ul>
  </>
);

PlaneCard.propTypes = {
  id: PropTypes.number.isRequired,
  plane: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    // here if the social links are updated in the backend
  }).isRequired,
};

export default PlaneCard;
