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
  divRef?: React.RefObject<HTMLDivElement>;
}

export const Pool = ({ fishes, onFishClick, selected, divRef }: PoolProps) => {
  return (
    <Styled.Root ref={divRef}>
      <Styled.Image src={pool} alt="pool" />
      {fishes.map(fish => (
        <FishComponent
          fish={fish}
          key={fish.id}
          onClick={() => onFishClick(fish)}
          isSelected={selected !== null && selected.id === fish.id}
        />
      ))}
    </Styled.Root>
  );
};
