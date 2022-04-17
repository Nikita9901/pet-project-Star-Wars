import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { UiButton } from "@ui/";
import { getApiResource } from "@react_redux_course/utils";
import { API_SEARCH } from "@react_redux_course/constants/api";
import { withErrorApi } from "@react_redux_course/hoc";
import { getPeopleId, getPeopleImage } from "@react_redux_course/utils";
import { SearchPageInfo } from "@react_redux_course/components";
import styles from "./SearchPage.module.css";

const SearchPage = ({ setErrorApi }) => {
  const [people, setPeople] = useState([]);
  const [inputSearchValue, setInputSearchValue] = useState("");

  const getResponse = async (param) => {
    const res = await getApiResource(API_SEARCH + param);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);

        return {
          id,
          name,
          img,
        };
      });
      setPeople(peopleList);

      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResponse("");
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputSearchValue(value);
    getResponse(value);
  };

  return (
    <>
      <h1 className="header_text">Search</h1>
      <div className={styles.container}>
        <input
          type="text"
          className={styles.input}
          value={inputSearchValue}
          onChange={handleInputChange}
          placeholder="Input characters name"
        />
      </div>
      <SearchPageInfo people={people} />
    </>
  );
};

SearchPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(SearchPage);
