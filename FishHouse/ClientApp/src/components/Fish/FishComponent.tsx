import React from 'react';
import clsx from 'clsx';
import {clampRotation, FishData} from 'common';
import {useClasses} from './Style';
import FishImage from './FishImage';

export type FishProps = {
    fish: FishData;
    onClick?: () => void;
    isSelected: boolean;
};

const getColor = (fish: FishData) => {
    const {threadId} = fish;
    if(threadId % 2 === 0) {
        return '#27ff00';
    }
    if(threadId % 3 === 0) {
        return '#ff0000';
    }
    if(threadId % 5 === 0) {
        return '#0032ff';
    }

    return '#000000';
}

export const FishComponent = ({fish, onClick, isSelected}: FishProps) => {
    const {x, y, rotation, name} = fish;
    const clampedRotation = clampRotation(rotation);
    let flipped = false;
    if(Math.abs(clampedRotation) >= Math.PI / 2 && Math.abs(clampedRotation) <= 3 * Math.PI / 2)
        flipped = true;

    const classes = useClasses({x, y, rotation, isSelected, flipped});

    return (
        <div>
            <div className={clsx(classes.nameWrapper)}>
                <span>{name}</span>
            </div>
            <FishImage
                className={clsx('fish', classes.root)}
                onClick={onClick}
                color={getColor(fish)}/>
        </div>
    );
};
