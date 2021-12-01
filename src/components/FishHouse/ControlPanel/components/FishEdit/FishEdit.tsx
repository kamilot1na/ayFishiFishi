import React from 'react';
import { FishData } from 'common';
import { Button, TextField } from '@material-ui/core';
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
      <TextField
        disabled
        label="Name"
        defaultValue="<Not Implemented>"
      />

      <Button
        disabled
        value="Сохранить"
        onClick={call}
      />
    </Styled.Root>
  );
};
