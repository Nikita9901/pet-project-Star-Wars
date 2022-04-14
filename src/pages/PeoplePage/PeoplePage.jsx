import {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import {withErrorApi} from "@react_redux_course/hoc";
import {PeopleList, PeopleNavigation} from "@react_redux_course/components";
import {getApiResource, getPeopleId, getPeopleImage, getPeoplePageId} from "@react_redux_course/utils";
import {API_PEOPLE} from "@react_redux_course/constants/api";
import {useQueryParams} from "@react_redux_course/hooks";
import styles from './PeoplePage.module.css';

const PeoplePage = ({setErrorApi}) => {
    const [people, setPeople] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [counterPage, setCounterPage] = useState(1);

    const query = useQueryParams();
    const queryPage = query.get('page');

    const getResource = async  (url) => {
        const res = await getApiResource(url);

        if (res){
            const peopleList = res.results.map(({name, url}) => {
                const id = getPeopleId(url);
                const img = getPeopleImage(id);

                return {
                    id,
                    name,
                    img
                }
            });
            setPeople(peopleList);
            setPrevPage(res.previous);
            setNextPage(res.next);
            setCounterPage(getPeoplePageId(url));
            setErrorApi(false);
        } else {
            setErrorApi(true)
        }
    }

    useEffect(() => {
        getResource(API_PEOPLE+queryPage);
    }, [])

    return (
        <>
            <PeopleNavigation
                getResource={getResource}
                prevPage={prevPage}
                nextPage={nextPage}
                counterPage={counterPage}
            />
            {people && <PeopleList people={people}/>}
        </>
    )
}

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
}
export default withErrorApi(PeoplePage);