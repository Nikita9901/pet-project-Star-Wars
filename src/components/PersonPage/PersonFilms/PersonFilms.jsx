import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { makeConcurrentRequest } from "@react_redux_course/utils/network";
import styles from "./PersonFilms.module.css";

const PersonFilms = ({ personFilms }) => {
  const [filmsName, setfilmsName] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await makeConcurrentRequest(personFilms);

      setfilmsName(response);
    })();
  }, []);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list_container}>
        {filmsName
          .sort((a, z) => a.episode_id - z.episode_id)
          .map(({ title, episode_id }) => (
            <li key={episode_id} className={styles.list_item}>
              <span className={styles.item_episode}>Episode {episode_id}</span>
              <span className={styles.item_colon}> : </span>
              <span className={styles.item_title}>{title}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

PersonFilms.propTypes = {
  personFilms: PropTypes.array,
};

export default PersonFilms;
