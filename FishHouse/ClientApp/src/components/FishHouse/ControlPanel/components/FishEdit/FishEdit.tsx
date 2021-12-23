import React from 'react';
import { FishData, FishType } from 'common';
import { Button, MenuItem, TextField } from '@material-ui/core';
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
        label="Thread ID"
        variant="outlined"
        size="small"
        value={fish.threadId}
      />

      <br />

      <TextField
        disabled
        label="Update delay"
        variant="outlined"
        size="small"
        value={fish.updateDelay}
      />

      <br />

      <TextField
        disabled
        select
        value={fish.type}
        label="Тип"
        variant="outlined"
        size="small"
      >
        <MenuItem value={FishType.Thread}>Thread</MenuItem>
        <MenuItem value={FishType.Task}>Task</MenuItem>
      </TextField>

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
