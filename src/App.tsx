import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ConnectionContext, ConnectionContextProvider} from "./client";
import {FishHouse} from "./components/FishHouse/FishHouse";

function App() {
  return (
    <ConnectionContextProvider>
      <FishHouse />
    </ConnectionContextProvider>
  );
}

export default App;
