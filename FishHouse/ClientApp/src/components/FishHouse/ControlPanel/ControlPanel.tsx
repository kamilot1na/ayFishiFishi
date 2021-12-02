import React, { useState } from 'react';
import { FishData } from 'common';
import { Button } from '@material-ui/core';
import { DeleteButton } from 'ui-kit';
import { Styled } from './Style';
import { FishEdit } from './components/FishEdit/FishEdit';
import { FishCreate } from './components/FishCreate/FishCreate';
import { useFishDeleteRandomHttpRequest } from './useFishDeleteRandomHttpRequest';
import { useFishDeleteAllHttpRequest } from './useFishDeleteAllHttpRequest';
import { SettingsPanel } from './components/SettingsPanel/SettingsPanel';

export type ControlPanelProps = {
  selected: FishData | null;
}

export const ControlPanel = ({ selected }: ControlPanelProps) => {
  const { call: callDelete, loading: deleteLoading } = useFishDeleteRandomHttpRequest();
  const { call: callDeleteAll, loading: deleteAllLoading } = useFishDeleteAllHttpRequest();
  const [settingsOpened, setSettingsOpened] = useState(false);

  return (
    <Styled.Root>
      {(!settingsOpened ? (
          <div>
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

              <Button
                variant="outlined"
                onClick={() => setSettingsOpened(true)}
              >
                Настройки
              </Button>
            </Styled.ButtonWrapper>
          </div>
        ) : (<SettingsPanel onCloseClick={() => setSettingsOpened(false)}/>)
      )}
    </Styled.Root>
  );
};
