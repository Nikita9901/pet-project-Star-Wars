import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEITRAL,
} from "@react_redux_course/context/ThemeProvider.jsx";
import { Favorite } from "@react_redux_course/components";
import darkLogo from "./img/darklogo.svg";
import lightLogo from "./img/lightlogo.svg";
import neitralLogo from "./img/neitrallogo.svg";
import styles from "./Header.module.css";

const Header = () => {
  const [icon, setIcon] = useState(neitralLogo);
  const isTheme = useTheme();

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setIcon(lightLogo);
        break;
      case THEME_DARK:
        setIcon(darkLogo);
        break;
      case THEME_NEITRAL:
        setIcon(neitralLogo);
        break;
      default:
        setIcon(neitralLogo);
    }
  }, [isTheme]);

  return (
    <div className={styles.container}>
      <img className={styles.icon} src={icon} alt="logo" />

      <ul className={styles.list_container}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/people/?page=1">People</NavLink>
        </li>
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
        <li>
          <NavLink to="/not-found">Not Found</NavLink>
        </li>
      </ul>
      <Favorite />
    </div>
  );
};

export default Header;
