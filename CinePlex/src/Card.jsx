import PropTypes from 'prop-types';

const Card = ({ movie }) => {
  const { Year, Poster, Title, Type } = movie;

  return (
    <div className="movie">
      <div>
        <p>{Year}</p>
      </div>
      <div>
        <img 
          src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/400'} 
          alt={Title} 
        />
      </div>
      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
};

// Adding prop-types validation for movie prop
Card.propTypes = {
  movie: PropTypes.shape({
    Year: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Type: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
