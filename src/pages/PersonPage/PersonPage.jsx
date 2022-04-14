import { useParams } from "react-router-dom";
import React, { useEffect, useState, Suspense } from "react";
import { useSelector } from "react-redux";
import { getApiResource } from "@react_redux_course/utils";
import { withErrorApi } from "@react_redux_course/hoc";
import PropTypes from "prop-types";
import {
  PersonImage,
  PersonInfo,
  PersonLinkBack,
} from "@react_redux_course/components";
import styles from "./PersonPage.module.css";
import { API_PERSON } from "@react_redux_course/constants/api";
import { getPeopleImage } from "@react_redux_course/utils";
import { UiLoading } from "@ui/";

const PersonFilms = React.lazy(() =>
  import("@react_redux_course/components/PersonPage/PersonFilms/PersonFilms")
);

const PersonPage = ({ setErrorApi }) => {
  const [personId, setpersonId] = useState(null);
  const [personInfo, setpersonInfo] = useState(null);
  const [personName, setpersonName] = useState(null);
  const [personPhoto, setpersonPhoto] = useState(null);
  const [personFilms, setpersonFilms] = useState(null);
  const [personFavorite, setpersonFavorite] = useState(false);

  const storeData = useSelector((state) => state.favoriteReducer);

  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}/`);
      setpersonId(id);

      storeData[id] ? setpersonFavorite(true) : setpersonFavorite(false);

      if (res) {
        setpersonInfo([
          { title: "Height", data: res.height },
          { title: "Birth year", data: res.birth_year },
          { title: "Gender", data: res.gender },
          { title: "Eye color", data: res.eye_color },
          { title: "Mass", data: res.mass },
          { title: "Skin color", data: res.skin_color },
          { title: "Hair color", data: res.hair_color },
        ]);
        setpersonPhoto(getPeopleImage(id));

        setpersonName(res.name);

        res.films.length && setpersonFilms(res.films);
        // res.films

        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);

  return (
    <>
      <PersonLinkBack />
      <div className={styles.wrapper}>
        <span className={styles.person_name}>{personName}</span>
        <div className={styles.container}>
          <PersonImage
            personPhoto={personPhoto}
            personName={personName}
            personId={personId}
            personFavorite={personFavorite}
            setpersonFavorite={setpersonFavorite}
          />

          {personInfo && <PersonInfo personInfo={personInfo} />}
          {personFilms && (
            <Suspense fallback={<UiLoading />}>
              <PersonFilms personFilms={personFilms} />
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
};

PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PersonPage);
