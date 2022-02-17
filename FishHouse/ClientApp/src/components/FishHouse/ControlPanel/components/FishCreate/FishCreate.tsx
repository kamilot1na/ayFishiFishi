import React, { useCallback, useState } from 'react';
import { FishType } from 'common';
import { Button, MenuItem, TextField } from '@material-ui/core';
import { Styled } from './Style';
import { useFishCreateHttpRequest } from './useFishCreateHttpRequest';

export const FishCreate = () => {
  const { call, loading } = useFishCreateHttpRequest();
  const [fishType, setFishType] = useState(FishType.Thread);
  const [fishUpdateDelay, setFishUpdateDelay] = useState(50);

  const handleFishTypeChange = useCallback((e: React.ChangeEvent<{ value: unknown }>) => {
    setFishType(e.target.value as FishType);
  }, [setFishType]);

  const handleFishUpdateDelayChange = useCallback((e: React.ChangeEvent<{ value: unknown }>) => {
    setFishUpdateDelay(e.target.value as number);
  }, [setFishUpdateDelay]);

  return (
    <Styled.Root>
      <Styled.Label align='center' variant='h6'>Создание</Styled.Label>

      <TextField
        select
        value={fishType}
        label="Тип"
        onChange={handleFishTypeChange}
        variant="outlined"
        size="small"
      >
        <MenuItem value={FishType.Thread}>Thread</MenuItem>
        <MenuItem value={FishType.Task}>Task</MenuItem>
      </TextField>

      <br />

      <TextField
        label="Update delay"
        variant="outlined"
        size="small"
        value={fishUpdateDelay}
        onChange={handleFishUpdateDelayChange}
      />

      <br />

      <Button
        variant="outlined"
        disabled={loading}
        onClick={() => call(fishType, fishUpdateDelay)}
      >
        Создать
      </Button>
    </Styled.Root>
  );
};
