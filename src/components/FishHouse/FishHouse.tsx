import React, {useState} from 'react';
import { useClasses } from "./Style";
import clsx from 'clsx';
import {FishComponent, FishProps} from "../Fish/FishComponent";
import {useMessageHandler} from "../../common/hooks/useMessageHandler";
import {useCurrentTime} from "../../common/hooks/useCurrentTime";

type Fish = FishProps & {
    id: number;
}

export const FishHouse = () => {
    const classes = useClasses();
    const [data, setData] = useState<Fish[]>([{x: 50, y: 50, rotation: 0, id: 1}]);

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
