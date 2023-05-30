import logo from './logo.svg';
import './App.css';
import React from 'react';
import SongList from './Components/SongList';
import SongDetails from './Components/SongDetails';

function App() {
  return (
    <div>
      
        <SongList/>
        <SongDetails/>
    </div>
  );
}

export default App;
