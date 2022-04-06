import {NavLink} from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.list_container}>
                <li><NavLink to="/" exact="true">Home</NavLink></li>
                <li><NavLink to="/people/?page=1" exact="true">People</NavLink></li>
                <li><NavLink to="/not-found" exact="true">Not Found</NavLink></li>
            </ul>
        </div>
    )
}

export default Header;