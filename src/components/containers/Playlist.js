import React from "react";
import PlaylistHeader from "../PlaylistHeader";
import PlaylistItems from "./PlaylistItems";
import NightMode from "../Nightmode";
import StylePlaylist from "../styles/StyledPlaylist";

function Playlist({ videos, active, nightModeCallback, nightMode }) {
  return (
    <StylePlaylist>
      <NightMode nightModeCallback={nightModeCallback} nightMode={nightMode} />
      <PlaylistHeader active={active} total={videos.length} />
      <PlaylistItems active={active} videos={videos} />
    </StylePlaylist>
  );
}

export default Playlist;
