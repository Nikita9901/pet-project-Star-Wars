import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {routesConfig} from "@react_redux_course/routes"
import styles from './App.module.css';
import {Header} from "@react_redux_course/components";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <div className={styles.wrapper}>
                    <Header/>
                    <Routes>
                        {routesConfig.map((route, index)=>(
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                element={route.element}
                            />
                        ))}
                    </Routes>
                </div>

            </BrowserRouter>


        </>

    )
}

export default App;
