import React from "react";
import StylePlaylistItem from "./styles/StyledPlaylistItem";

function PlaylistItem({ video, active, played }) {
  return (
    <StylePlaylistItem active={active} played={played}>
      <div className="wbn-player__video-nr">{video.num}</div>
      <div className="wbn-player__video-name">{video.title}</div>
      <div className="wbn-player__video-time">{video.duration}</div>
    </StylePlaylistItem>
  );
}

export default PlaylistItem;
