import React, { useCallback, useState } from 'react';
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
  const [fishUpdateDelay, setFishUpdateDelay] = useState(fish.updateDelay);

  const handleFishUpdateDelayChange = useCallback((e: React.ChangeEvent<{ value: unknown }>) => {
    setFishUpdateDelay(e.target.value as number);
  }, [setFishUpdateDelay]);

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
        label="Update delay"
        variant="outlined"
        size="small"
        value={fishUpdateDelay}
        onChange={handleFishUpdateDelayChange}
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
          variant="outlined"
          onClick={() => call(fish.id, fishUpdateDelay)}
        >Сохранить</Button>

        <DeleteButton
          disabled
          variant="outlined"
        >Удалить</DeleteButton>
      </Styled.ButtonWrapper>
    </Styled.Root>
  );
};
