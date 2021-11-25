import React, {useCallback, useEffect, useState} from 'react';
import { useClasses } from "./Style";
import clsx from 'clsx';
import {useFishesHttpQuery} from "./api/useFishesHttpQuery";
import {FishComponent, FishProps} from "../Fish/FishComponent";
import {useCurrentTime} from "../../common/hooks/useCurrentTime";
import {useMessageHandler} from "../../common/hooks/useMessageHandler";

type Fish = FishProps & {
    id: number;
}

export const FishHouse = () => {
    const classes = useClasses();
    const [data, setData] = useState<Fish[]>([]);

    useMessageHandler('fishData', (newData: Fish[]) => {
        setData(newData);
    });

    return (
        <div className={clsx(classes.root)} >
            {data.map(fish => (
                <FishComponent x={fish.x} y={fish.y} rotation={fish.rotation} key={fish.id} />
            ))}
        </div>
    );
}
