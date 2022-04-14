import PropTypes from 'prop-types';
import {UiButton} from "@ui/";
import styles from './SearchPage.module.css';

const SearchPage = () => {
    return (
        <div className={styles.container}>
            <input type="text" className={styles.input}/>
            <UiButton onClick={()=>{}} classes={styles.button}>Найти</UiButton>
        </div>
    )
}

SearchPage.propTypes = {

}

export default SearchPage;