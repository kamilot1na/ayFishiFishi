import React, {useCallback, useEffect, useState} from 'react';
import { useClasses } from "./Style";
import clsx from 'clsx';
import {useFishesHttpQuery} from "./api/useFishesHttpQuery";
import {FishComponent, FishProps} from "../Fish/FishComponent";
import {useCurrentTime} from "../../common/hooks/useCurrentTime";

type Fish = FishProps & {
    id: number;
}

export const FishHouse = () => {
    const classes = useClasses();
    const { refetch } = useFishesHttpQuery();
    const [data, setData] = useState<Fish[]>([]);
    const currentTime = useCurrentTime(500);

    const refetchData = useCallback(async () => {
        const newData = await refetch();
        setData(newData);
    }, [refetch, setData])

    useEffect(() => {
        refetchData();
    }, [currentTime, refetchData]);

    return (
        <div className={clsx(classes.root)} >
            {data.map(fish => (
                <FishComponent x={fish.x} y={fish.y} rotation={fish.rotation} key={fish.id} />
            ))}
        </div>
    );
}
