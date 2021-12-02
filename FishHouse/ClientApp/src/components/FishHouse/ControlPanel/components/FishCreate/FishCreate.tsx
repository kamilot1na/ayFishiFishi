import React, { useCallback, useState } from 'react';
import { FishType } from 'common';
import { Button, MenuItem, Select, TextField } from '@material-ui/core';
import { Styled } from './Style';
import { useFishCreateHttpRequest } from './useFishCreateHttpRequest';

export const FishCreate = () => {
  const { call, loading } = useFishCreateHttpRequest();
  const [fishType, setFishType] = useState(FishType.Thread);
  const [fishName, setFishName] = useState('Name');

  const handleFishTypeChange = useCallback((e: React.ChangeEvent<{ value: unknown }>) => {
    setFishType(e.target.value as FishType);
  }, [setFishType]);

  const handleFishNameChange = useCallback((e: React.ChangeEvent<{ value: string }>) => {
    setFishName(e.target.value);
  }, [setFishName]);

  return (
    <Styled.Root>
      <TextField
        label="Name"
        defaultValue="Name"
        value={fishName}
        onChange={handleFishNameChange}
      />

      <br />

      <Select
        value={fishType}
        label="Тип"
        onChange={handleFishTypeChange}
      >
        <MenuItem value={FishType.Thread}>Thread</MenuItem>
        <MenuItem value={FishType.Task}>Task</MenuItem>
      </Select>

      <br />

      <Button
        variant="outlined"
        disabled={loading}
        onClick={() => call(fishType, fishName)}
      >
        Создать
      </Button>
    </Styled.Root>
  );
};
