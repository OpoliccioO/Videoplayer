import React from "react";
import PlaylistItem from "../PlaylistItem";
import StyledPlaylistItems from "../styles/StyledPlaylistitems";
import withLink from "../hoc/withLink";

const PlaylistWithLink = withLink(PlaylistItem);

function PlaylistItems({ active, videos }) {
  return (
    <StyledPlaylistItems>
      {videos.map(video => (
        <PlaylistWithLink
          key={video.id}
          active={video.id === active.id ? true : false}
          video={video}
          played={video.played}
        />
      ))}
    </StyledPlaylistItems>
  );
}

export default PlaylistItems;
