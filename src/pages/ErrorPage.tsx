import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div>
            <h1>Oops!</h1>
            <p>Error has occurred: {error.statusText || error.message}</p>
        </div>
    );
}

