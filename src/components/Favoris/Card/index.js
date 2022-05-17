import './card.scss';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import men from '../../../assets/images/men.png';
import javascript from '../../../assets/images/js.png';
import { setToggleModalProfil } from '../../../actions/settings';
import { getOneFavorite } from '../../../actions/favorites';

function Card({ favorite }) {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="card__avatar">
        <img src={javascript} alt="Avatar" className="card__avatar--logo" />
        <img src={men} alt="Avatar" className="card__avatar--img" />
      </div>
      <div className="card__container">
        <h4 className="card__container--name">{favorite.data.firstname} {favorite.data.lastname}</h4>
        <p className="card__container--localisation">{favorite.data.city}</p>
        <p className="card__container--experience">Experience <span className="card__container--experience--year"> -{favorite.data.years_of_experience} an</span></p>
      </div>
      <div className="card__button">
        <button
          type="button"
          onClick={() => {
            dispatch(getOneFavorite(favorite.data));
            dispatch(setToggleModalProfil());
          }}
          className="card__button--profileview"
        >Voir le profil
        </button>
        <button
          type="button"
          className="card__button--delete"
        >supprimer
        </button>
      </div>
    </div>
  );
}

// Card.propTypes = {
//   favorite: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       firstname: PropTypes.string.isRequired,
//       lastname: PropTypes.string.isRequired,
//       city: PropTypes.string.isRequired,
//       years_of_experience: PropTypes.number.isRequired,
//     }),
//   ).isRequired,
// };

export default Card;
