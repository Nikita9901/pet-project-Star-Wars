import {useState} from "react";
import {ErrorMessage} from "@react_redux_course/components";

export const withErrorApi = View => {
    return props => {
        const [errorApi, setErrorApi] = useState(null);

        return(
            <>
                {errorApi
                    ? <ErrorMessage />
                    : (
                            <View
                                setErrorApi={setErrorApi}
                                {...props}
                            />
                    )
                }
            </>
        )
    }
}