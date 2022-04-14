import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import iconFavorite from "@react_redux_course/static/favorite.svg";
import iconFavoriteFill from "@react_redux_course/static/favorite-fill.svg";
import {
  setPersonToFavorite,
  removePersonFromFavorite,
} from "@react_redux_course/store/actions";

import styles from "./PersonImage.module.css";

const PersonImage = ({
  personPhoto,
  personName,
  personId,
  personFavorite,
  setpersonFavorite,
}) => {
  const dispatch = useDispatch();

  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorite(personId));
      setpersonFavorite(false);
    } else {
      dispatch(
        setPersonToFavorite({
          [personId]: {
            name: personName,
            img: personPhoto,
          },
        })
      );
      setpersonFavorite(true);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <img src={personPhoto} alt={personName} className={styles.photo} />
        <img
          src={personFavorite ? iconFavorite : iconFavoriteFill}
          onClick={dispatchFavoritePeople}
          className={styles.icon}
          alt="favorite"
        />
      </div>
    </>
  );
};

PersonImage.propTypes = {
  personPhoto: PropTypes.string,
  personName: PropTypes.string,
  personId: PropTypes.string,
  setpersonFavorite: PropTypes.func,
  personFavorite: PropTypes.bool,
};

export default PersonImage;
