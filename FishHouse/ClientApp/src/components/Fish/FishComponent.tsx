import React from 'react';
import clsx from 'clsx';
import {clampRotation, FishData, FishType} from 'common';
import {useClasses} from './Style';
import FishImage from './FishImage';

export type FishProps = {
    fish: FishData;
    onClick?: () => void;
    isSelected: boolean;
};

const getColor = (fish: FishData) => {
    switch(fish.type) {
        case FishType.Task:
            return '#00FF01';
        case FishType.Thread:
            return '#FF0000';
        default:
            return '#000000';

    }
}

export const FishComponent = ({fish, onClick, isSelected}: FishProps) => {
    const {x, y, rotation} = fish;
    const clampedRotation = clampRotation(rotation);
    let flipped = false;
    if(Math.abs(clampedRotation) >= Math.PI / 2 && Math.abs(clampedRotation) <= 3 * Math.PI / 2)
        flipped = true;

    const classes = useClasses({x, y, rotation, isSelected, flipped});

    return (
        <div>
            <div className={clsx(classes.nameWrapper)}>
                <span style={{}}>{fish.name}:{fish.threadId}</span>
            </div>
            <FishImage
                className={clsx('fish', classes.root)}
                onClick={onClick}
                color={getColor(fish)}/>
        </div>
    );
};
