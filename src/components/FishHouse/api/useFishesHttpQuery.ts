import {useCallback} from "react";

export const useFishesHttpQuery = () => {
    const refetch = useCallback(async () => {
        const response = await fetch(window.location.origin + `/api/???`); //TODO: change url
        const data = await response.json();
        return data;
    }, []);

    return { refetch };
}
