import PropTypes from 'prop-types'
import styles from './PeopleList.module.css';
import {Link} from "react-router-dom";

const PeopleList = ({people}) => {
    return (
        <ul className={styles.list_container}>
            {people.map(({id, name, img}) =>
                <li className={styles.list_item} key={id}>
                    <Link to={`/pet-project-Star-Wars/people/${id}`}>
                        <img className={styles.person_photo} src={img} alt={name}/>
                        <p>{name}</p>
                    </Link>

                </li>
            )}
        </ul>
    )
}

PeopleList.propTypes = {
    people: PropTypes.array
}

export default PeopleList;