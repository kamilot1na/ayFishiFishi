import React, { useCallback, useState } from 'react';
import { FishType } from 'common';
import { Button, MenuItem, Select, TextField } from '@material-ui/core';
import { Styled } from './Style';
import { useFishCreateHttpRequest } from './useFishCreateHttpRequest';

export const FishCreate = () => {
  const { call, loading } = useFishCreateHttpRequest();
  const [fishType, setFishType] = useState(FishType.Thread);

  const handleFishTypeChange = useCallback((e: React.ChangeEvent<{ value: unknown }>) => {
    setFishType(e.target.value as FishType);
  }, [setFishType]);

  return (
    <Styled.Root>
      <TextField
        disabled
        label="Name"
        defaultValue="<Not Implemented>"
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
        onClick={() => call(fishType)}
      >
        Создать
      </Button>
    </Styled.Root>
  );
};
