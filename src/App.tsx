import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import MusicControls from "./components/MusicControls/MusicControls";
import { useState } from "react";
import { ISong } from "./components/PlayList/PlayList";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";

function App() {
  return (
    <div className="App">
      <MusicPlayer></MusicPlayer>
    </div>
  );
}

export default App;
