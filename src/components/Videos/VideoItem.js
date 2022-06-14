import React from "react";
import ReactPlayer from "react-player/youtube";
import dislike from "../../assets/dislike.png";
import like from "../../assets/like.png";

const VideoItem = ({ canVote, onVote, video }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <ReactPlayer
          width="320px"
          height="240px"
          url={video.url}
          style={{ width: "320px" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <div role="heading" aria-level={1}>
          {video.title}
        </div>
        <div>
          Shared by: <b>{video.author}</b>
        </div>
        <div>
          <b>{video.vote_up}</b>{" "}
          <img
            src={like}
            alt="vote_up"
            style={{ width: "24px", marginRight: "10px" }}
          />
          <b>{video.vote_down}</b>{" "}
          <img src={dislike} alt="vote_down" style={{ width: "24px" }} />
        </div>
        <div>
          Description:
          <p
            style={{
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 5,
              WebkitBoxOrient: "vertical",
              textOverflow: "ellipsis",
            }}
          >
            {video.subtitle}
          </p>
        </div>
        <div>
          {canVote && (
            <>
              <button onClick={() => onVote(video.id, 1)}>Up</button>
              <button onClick={() => onVote(video.id, 0)}>Down</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
