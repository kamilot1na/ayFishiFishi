import React from 'react';
import clsx from 'clsx';
import { FishData } from 'common';
import { useClasses } from './Style';
import fishImg from './fish.png';

export type FishProps = Omit<FishData, 'id'> & {
  onClick?: () => void;
};

export const FishComponent = ({ x, y, rotation, onClick }: FishProps) => {
  const classes = useClasses({ x, y, rotation });

  return (
    <img
      src={fishImg}
      className={clsx(classes.root)}
      alt=""
      onClick={onClick}
    />
  );
};
