import MainContent from "./components/MainContent";
import Playlist from "./components/Playlist";
import Nav from "./components/Nav";
import Player from "./components/player/Player";
import { useContext, useState } from "react";
import DataContext from "./services/DataContext";
import RadioPlayer from "./components/player/RadioPlayer";

function App() {
  const [show, setShow] = useState(false);
  const [url, setUrl] = useState("");
  const playerVal = { show, setShow, url, setUrl };

  return (
    <>
      <DataContext.Provider value={playerVal}>
        <main className="main_page_container" id="main_page_container">
          <Nav />
          <MainContent />
          {/* <Playlist /> */}
        </main>
        <RadioPlayer />
      </DataContext.Provider>
    </>
  );
}

export default App;
