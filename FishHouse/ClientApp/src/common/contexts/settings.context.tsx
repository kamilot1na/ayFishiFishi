import React, { FC, useState } from 'react';
import { ClientSettings, NetworkMode } from '../types';

const defaultSettings: ClientSettings = {
  networkMode: NetworkMode.Lockstep
};

export const SettingsContext =
  React.createContext<
  { currentSettings: ClientSettings, setSettings: React.Dispatch<React.SetStateAction<ClientSettings>>}
    >(
      {
        currentSettings: defaultSettings,
        setSettings: () => {}
      });

export const SettingsContextProvider: FC =
  ({ children }) => {
    const [currentSettings, setSettings] = useState(defaultSettings);

    return (
      <SettingsContext.Provider value={{currentSettings, setSettings}}>
        {children}
      </SettingsContext.Provider>
  );
}
