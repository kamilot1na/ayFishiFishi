import React from 'react';
import { FishData } from 'common';
import { Styled } from './Style';
import { FishComponent } from '../../Fish';
import pool from './pool.jpg';

export type PoolProps = {
  fishes: FishData[];
  onFishClick: (fish: FishData) => void;
  selected: FishData | null;
  onClick: () => void;
}

export const Pool = ({ fishes, onFishClick, selected }: PoolProps) => {
  return (
    <Styled.Root>
      <Styled.Image src={pool} alt="pool" />
      {fishes.map(fish => (
        <FishComponent
          x={fish.x}
          y={fish.y}
          rotation={fish.rotation}
          key={fish.id}
          onClick={() => onFishClick(fish)}
          isSelected={selected !== null && selected.id === fish.id}
        />
      ))}
    </Styled.Root>
  );
};
