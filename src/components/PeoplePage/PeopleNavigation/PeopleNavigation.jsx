import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import styles from './PeopleNavigation.module.css';

const PeopleNavigation = ({
    getResource,
    prevPage,
    nextPage,
    counterPage
}) => {
    return (
        <div>
            <Link to={`/people/?page=${counterPage-1}`}>
                <button className={styles.buttons}>Previous</button>
            </Link>
            <Link to={`/people/?page=${counterPage+1}`}>
                <button className={styles.buttons}>Next</button>
            </Link>
        </div>
    )
}

PeopleNavigation.propTypes = {
    getResource: PropTypes.func,
    prevPage: PropTypes.string,
    nextPage: PropTypes.string,
    counterPage: PropTypes.number
}

export default PeopleNavigation;