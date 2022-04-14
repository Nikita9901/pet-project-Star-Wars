import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { PeopleList } from "@react_redux_course/components";
import styles from "./FavoritesPage.module.css";

const FavoritesPage = () => {
  const [people, setPeople] = useState([]);
  const storeData = useSelector((state) => state.favoriteReducer);

  useEffect(() => {
    const arr = Object.entries(storeData);

    if (arr.length) {
      const res = arr.map((item) => {
        return {
          id: item[0],
          ...item[1],
        };
      });
      setPeople(res);
    }
  }, []);

  return (
    <>
      <h1 className="header_text">FavoritesPage</h1>
      {people.length ? (
        <PeopleList people={people} />
      ) : (
        <h2 className={styles.comment}>No data</h2>
      )}
    </>
  );
};

export default FavoritesPage;
