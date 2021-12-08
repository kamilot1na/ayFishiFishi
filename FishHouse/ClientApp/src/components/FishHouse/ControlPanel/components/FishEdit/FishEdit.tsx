import React from 'react';
import { FishData } from 'common';
import { Button, TextField } from '@material-ui/core';
import { DeleteButton } from 'ui-kit';
import { Styled } from './Style';
import { useFishSaveHttpRequest } from './useFishSaveHttpRequest';

export type FishEditProps = {
  fish: FishData;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const FishEdit = ({ fish }: FishEditProps) => {
  const { call } = useFishSaveHttpRequest();

  return (
    <Styled.Root>
      <Styled.Label align='center' variant='h6'>Редактирование</Styled.Label>

      <TextField
        disabled
        label="Имя"
        variant="outlined"
        size="small"
        value={fish.name}
      />

      <Styled.ButtonWrapper>
        <Button
          disabled
          variant="outlined"
          onClick={call}
        >Сохранить</Button>

        <DeleteButton
          disabled
          variant="outlined"
          onClick={call}
        >Удалить</DeleteButton>
      </Styled.ButtonWrapper>
    </Styled.Root>
  );
};
