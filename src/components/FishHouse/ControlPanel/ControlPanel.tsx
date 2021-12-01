import React from 'react';
import { FishData } from 'common';
import { Styled } from './Style';
import { FishEdit } from './components/FishEdit/FishEdit';
import { FishCreate } from './components/FishCreate/FishCreate';

export type ControlPanelProps = {
  selected: FishData | null;
}

export const ControlPanel = ({ selected }: ControlPanelProps) => {
  return (
    <Styled.Root>
      {selected ? (<FishEdit fish={selected} />) : (<FishCreate />)}
    </Styled.Root>
  );
};
