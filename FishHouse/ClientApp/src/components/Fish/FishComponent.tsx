import React from 'react';
import clsx from 'clsx';
import { clampRotation, FishData } from 'common';
import { useClasses } from './Style';
import fishImg from './fish.png';

export type FishProps = {
  fish: FishData;
  onClick?: () => void;
  isSelected: boolean;
};

export const FishComponent = ({ fish, onClick, isSelected }: FishProps) => {
  const { x, y, rotation, threadId, type: fishType } = fish;
  const clampedRotation = clampRotation(rotation);
  let flipped = false;
  if(Math.abs(clampedRotation) >= Math.PI/2 && Math.abs(clampedRotation) <= 3*Math.PI / 2)
    flipped = true;

  const classes = useClasses({ x, y, rotation, isSelected, flipped, fishType });

  return (
    <div>
      <div className={clsx(classes.nameWrapper)} >
        <span>{threadId}</span>
      </div>
      <img
        src={fishImg}
        className={clsx("fish", classes.root)}
        alt=""
        onClick={onClick}
      />
    </div>
  );
};
