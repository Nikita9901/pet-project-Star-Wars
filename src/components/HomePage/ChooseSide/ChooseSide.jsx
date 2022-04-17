import PropTypes from "prop-types";
import imgLightSide from "./img/light-side.jpg";
import imgDarkSide from "./img/dark-side.jpg";
import imgFalcon from "./img/falcon.jpg";
import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEITRAL,
} from "@react_redux_course/context/ThemeProvider.jsx";
import cn from "classnames";

import styles from "./ChooseSide.module.css";

const ChooseSideItem = ({ img, theme, text, classes }) => {
  const isTheme = useTheme();

  return (
    <div className={styles.subcontainer}>
      <div
        onClick={() => isTheme.change(theme)}
        className={cn(styles.item, classes)}
      >
        <div className={styles.item_header}>{text}</div>
        <img className={styles.item_img} src={img} alt="" />
      </div>
    </div>
  );
};

ChooseSideItem.propTypes = {
  img: PropTypes.string,
  theme: PropTypes.string,
  text: PropTypes.string,
  classes: PropTypes.string,
};

const ChooseSide = () => {
  const elements = [
    {
      theme: THEME_LIGHT,
      text: "Light Side",
      img: imgLightSide,
      classes: styles.item_light,
    },
    {
      theme: THEME_DARK,
      text: "Dark Side",
      img: imgDarkSide,
      classes: styles.item_dark,
    },
    {
      theme: THEME_NEITRAL,
      text: "I'm Han Solo",
      img: imgFalcon,
      classes: styles.item_neitral,
    },
  ];

  return (
    <div className={styles.container}>
      {elements.map((props, index) => (
        <ChooseSideItem key={index} {...props} />
      ))}
    </div>
  );
};

ChooseSide.propTypes = {};

export default ChooseSide;
