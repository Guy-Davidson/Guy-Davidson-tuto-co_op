import React, { useState } from 'react';
import './App.scss';
import NavBar from './NavBar';
import Homepage from './Components/HomePageComponents/Homepage'
import Favoritepage from './Components/FavoritespageComponents/Favoritepage'

const MODE_HOME = 0;
const MODE_FAVORITES = 1;

function App() {
  const [mode, setMode] = useState(MODE_HOME);
  const [homeBeenPlayed, setHomeBeenPlayed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const renderByMode = (newMode) => {
    newMode === MODE_HOME ? setMode(MODE_HOME) : setMode(MODE_FAVORITES);
    if(isPlaying) {
      setHomeBeenPlayed(true);
    }    
  }

  const homeSetIsPlaying = (currentPlayMode) => {
    setIsPlaying(currentPlayMode);
  }

  
  return (
    <div className="App">
      <NavBar renderByMode={renderByMode}/>
      {mode === MODE_HOME && <Homepage homeSetIsPlaying={homeSetIsPlaying} homeBeenPlayed={homeBeenPlayed}/>}
      {mode === MODE_FAVORITES && <Favoritepage />}      
    </div>
  );
}

export default App;
