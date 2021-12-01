import React from 'react';
import './App.css';
import { ConnectionContextProvider } from '../../client';
import { FishHouse } from '../FishHouse';

function App() {
  return (
    <ConnectionContextProvider>
        <FishHouse />
    </ConnectionContextProvider>
  );
}

export default App;
