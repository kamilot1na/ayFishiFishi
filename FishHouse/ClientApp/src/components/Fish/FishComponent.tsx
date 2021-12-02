import React from 'react';
import clsx from 'clsx';
import { FishData } from 'common';
import { useClasses } from './Style';
import fishImg from './fish.png';

export type FishProps = Omit<FishData, 'id'> & {
  onClick?: () => void;
  isSelected: boolean;
};

export const FishComponent = ({ x, y, rotation, onClick, isSelected }: FishProps) => {
  const classes = useClasses({ x, y, rotation, isSelected });

  return (
    <div>
      <div className={clsx(classes.nameWrapper)} >
        <span>Name</span>
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
