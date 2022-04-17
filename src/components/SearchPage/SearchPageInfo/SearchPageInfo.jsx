import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./SearchPageInfo.module.css";

const SearchPageInfo = ({ people }) => (
  <>
    {people.length ? (
      <ul className={styles.list_container}>
        {people.map(({ id, name, img }) => (
          <li key={id} className={styles.list_item}>
            <Link to={`/people/${id}`}>
              <img src={img} alt={name} className={styles.person_photo} />
              <p className={styles.person_name}>{name}</p>
            </Link>
          </li>
        ))}
      </ul>
    ) : (
      <h2 className={styles.person_comment}>No results</h2>
    )}
  </>
);

SearchPageInfo.propTypes = {
  people: PropTypes.array,
};

export default SearchPageInfo;
