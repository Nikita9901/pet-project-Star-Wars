import { useSelector } from "react-redux";

import styles from "./FavoritesPage.module.css";

const FavoritesPage = () => {
  const storeDate = useSelector((state) => state.favoriteReducer);
  console.log(storeDate);

  return <>FavoritePage</>;
};

export default FavoritesPage;
