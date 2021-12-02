import React from 'react';
import { FishData } from 'common';
import { Styled } from './Style';
import { FishEdit } from './components/FishEdit/FishEdit';
import { FishCreate } from './components/FishCreate/FishCreate';
import { DeleteButton } from '../../../ui-kit';
import { useFishDeleteRandomHttpRequest } from './useFishDeleteRandomHttpRequest';
import { useFishDeleteAllHttpRequest } from './useFishDeleteAllHttpRequest';

export type ControlPanelProps = {
  selected: FishData | null;
}

export const ControlPanel = ({ selected }: ControlPanelProps) => {
  const { call: callDelete, loading: deleteLoading } = useFishDeleteRandomHttpRequest();
  const { call: callDeleteAll, loading: deleteAllLoading } = useFishDeleteAllHttpRequest();

  return (
    <Styled.Root>
      {selected ? (<FishEdit fish={selected} />) : (<FishCreate />)}
      <Styled.ButtonWrapper>
        <DeleteButton
          disabled={deleteLoading}
          variant="outlined"
          onClick={callDelete}
        >Удалить случайную рыбку</DeleteButton>

        <DeleteButton
          disabled={deleteAllLoading}
          variant="outlined"
          onClick={callDeleteAll}
        >Удалить всех</DeleteButton>
      </Styled.ButtonWrapper>
    </Styled.Root>
  );
};
