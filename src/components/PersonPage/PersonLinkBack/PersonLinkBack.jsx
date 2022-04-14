import {useNavigate} from "react-router";
import iconBack from "@react_redux_course/static/left-arrow.png";
import styles from './PersonLinkBack.module.css';

const PersonLinkBack = () => {
    const navigate = useNavigate();

    const handleGoBack = e => {
        e.preventDefault();
        navigate(-1);
    };
    return (
        <>
            <a
                href="#"
                onClick={handleGoBack}
                className={styles.link}
            >
                <img src={iconBack} alt="left-arrow" className={styles.link_img}/>
                <span>Go back</span>
            </a>
        </>
    )
}

export default PersonLinkBack;