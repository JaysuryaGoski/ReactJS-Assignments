import PropTypes from 'prop-types';

function Card({ item, id, handleClick }) {
    const itemClass = item.stat ? ` ${item.stat}` : "";

    return (
        <div className={"card" + itemClass} onClick={() => handleClick(id)}>
            <img src={item.img} alt={item.id} />
        </div>
    );
}

Card.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        stat: PropTypes.string.isRequired
    }).isRequired,
    id: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired
};

export default Card;
