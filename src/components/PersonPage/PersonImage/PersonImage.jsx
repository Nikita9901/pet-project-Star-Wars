import PropTypes from 'prop-types';
import styles from './PersonImage.module.css';

const PersonImage = ({personPhoto, personName}) => {
    return (
        <div className={styles.container}>
            <img src={personPhoto} alt={personName} className={styles.photo}/>
        </div>
    )
}

PersonImage.propTypes = {
    personPhoto: PropTypes.string,
    personName: PropTypes.string
}

export default PersonImage;