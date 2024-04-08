import PlayListCards from "./ui/PlayListCards";

export default function Playlist() {
  return (
    <>
      <div className="playlist_container">
        <div className="logo card">
          <h3 className="h3">Playlist</h3>
        </div>
        <div className="playlist_content card">
          <PlayListCards
            title={"Playlist Title"}
            description={"PlayList Description"}
          />
          <PlayListCards
            title={"Playlist Title"}
            description={"PlayList Description"}
          />
          <PlayListCards
            title={"Playlist Title"}
            description={"PlayList Description"}
          />
          <PlayListCards
            title={"Playlist Title"}
            description={"PlayList Description"}
          />
        </div>
      </div>
    </>
  );
}
