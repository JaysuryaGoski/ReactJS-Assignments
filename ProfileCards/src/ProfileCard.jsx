import PropTypes from 'prop-types';
import './ProfileCard.css';
const ProfileCard = ({
  name,
  age,
  location,
  bio,
  hourlyRate,
  role,
  imgSrc,
  lastSeen,
  online,
  starColor,
  skills
}) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={imgSrc} alt={name} className="profile-img" />
        <div className={`star ${starColor === 'gold' ? 'golden-star' : 'gray-star'}`}>
          &#9733;
        </div>
      </div>
      <div className="card-body">
        <h3>{role}</h3>
        <p className="rate">€{hourlyRate}/hour</p>
        <h2>{name}, {age}</h2>
        <p className="location">{location}</p>
        <p>{bio}</p>
        
        {skills.length > 0 && (
          <div className="skills">
            <h4>Skills:</h4>
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="buttons">
          <button className="cv-btn">View CV</button>
          <button className="offer-btn">Make Offer</button>
        </div>

        <div className="status">
          {online ? (
            <span className="online">
              <span className="status-indicator"></span> Online
            </span>
          ) : (
            <span>{lastSeen}</span>
          )}
        </div>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  hourlyRate: PropTypes.number.isRequired,
  role: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  lastSeen: PropTypes.string,
  online: PropTypes.bool.isRequired,
  starColor: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.string)
};

export default ProfileCard;
