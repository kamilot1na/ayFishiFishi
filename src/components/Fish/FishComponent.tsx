import React from 'react';
import { useClasses } from './Style';
import clsx from 'clsx';
import fishImg from './fish.png';

export type FishProps = {
    x: number;
    y: number;
    rotation: number;
}

export const FishComponent = ({
    x,
    y,
    rotation
}: FishProps) => {
    const classes = useClasses({x, y, rotation});

    return (
        <img src={fishImg} className={clsx(classes.root)}  alt='' />
    );
}
