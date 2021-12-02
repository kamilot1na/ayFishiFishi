import { useContext } from 'react';
import { SettingsContext } from '../contexts/settings.context';

export const useSettings = () => {
  const {currentSettings, setSettings} = useContext(SettingsContext);

  return {settings: currentSettings, setSettings};
}
