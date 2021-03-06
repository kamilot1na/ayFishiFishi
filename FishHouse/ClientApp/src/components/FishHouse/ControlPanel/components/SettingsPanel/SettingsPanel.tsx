import React, { useCallback } from 'react';
import { NetworkMode, useSettings } from 'common';
import { Button, MenuItem, TextField } from '@material-ui/core';
import { Styled } from './Style';

export type SettingsPanelProps = {
  onCloseClick: () => void;
}

export const SettingsPanel = ({ onCloseClick }: SettingsPanelProps) => {
  const { settings, setSettings } = useSettings();
  const handleNetworkModeChange = useCallback((e: React.ChangeEvent<{ value: unknown }>) => {
    setSettings((prevSettings) =>
      ({
        ...prevSettings,
        networkMode: e.target.value as NetworkMode
      })
    );
  }, [setSettings]);

  const handleUpdateFrequencyChange = useCallback((e: React.ChangeEvent<{ value: string }>) => {
    setSettings((prevSettings) =>
      ({
        ...prevSettings,
        updateFrequency: Number(e.target.value)
      })
    );
  }, [setSettings]);

  return (
    <Styled.Root>
      <Styled.Label align='center' variant='h6'>Настройки</Styled.Label>

      <TextField
        select
        value={settings.networkMode}
        label="Режим работы сети"
        onChange={handleNetworkModeChange}
        variant="outlined"
        size="small"
      >
        <MenuItem value={NetworkMode.Lockstep}>Lockstep</MenuItem>
        <MenuItem value={NetworkMode.Predictive}>Predictive</MenuItem>
      </TextField>

      <br />

      <TextField
        label="Частота обнавления (мс)"
        variant="outlined"
        size="small"
        value={settings.updateFrequency}
        type='number'
        onChange={handleUpdateFrequencyChange}
      />

      <br />

      <Button
        variant="outlined"
        onClick={onCloseClick}
      >
        Закрыть
      </Button>
    </Styled.Root>
  );
};
