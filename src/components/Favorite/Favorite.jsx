import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import icon from "@react_redux_course/static/bookmark.svg";
import styles from "./Favorite.module.css";
import { Link } from "react-router-dom";

const Favorite = () => {
  const [count, setCount] = useState();
  const storeData = useSelector((state) => state.favoriteReducer);

  useEffect(() => {
    const length = Object.keys(storeData).length;
    setCount(length);
  }, [storeData]);

  return (
    <div className={styles.container}>
      <Link to="/favorites">
        <span className={styles.counter}>{count}</span>
        <img className={styles.icon} src={icon} alt="Favorite" />
      </Link>
    </div>
  );
};

export default Favorite;
