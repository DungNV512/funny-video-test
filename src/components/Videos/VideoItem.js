import React from 'react';
import { useSelector } from 'react-redux';
import ReactPlayer from 'react-player/youtube';
import { selectIsAuth } from '../../selector/auth/selectAuth';
import dislike from '../../assets/dislike.png';
import like from '../../assets/like.png';
import voted from '../../assets/voted.png';
import './style.css';

const VideoItem = ({ video, onVote }) => {
  const isAuth = useSelector(selectIsAuth);
  // const handleVote = (videoId, type) => {
  //   onVote(videoId, type);
  // };
  return (
    <div className="video-item">
      <div style={{ marginRight: '30px' }}>
        <ReactPlayer
          width="320px"
          height="240px"
          url={video.url}
          style={{ width: '320px' }}
        />
      </div>
      <div className="movie-item">
        <div role="heading" aria-level={1} className="title">
          <b>{video.title}</b>
        </div>
        <div>
          <span className="label">Shared by:</span> {video.author}
        </div>
        <div className="vote-group">
          <div className="vote-item">
            {video.vote_up} <img src={like} alt="vote_up" width={16} />
          </div>
          <div className="vote-item">
            {video.vote_down} <img src={dislike} alt="vote_down" width={16} />
          </div>
          {isAuth && video.voted && (
            <div className="vote-btn">
              <img src={voted} alt="vote_down" width={40} />
              <span>(voted)</span>
            </div>
          )}
        </div>
        <div>
          <span className="label">Description:</span>
          <p className="description-content">{video.subtitle}</p>
        </div>
        {/* <div>
          {isAuth && (
            <>
              <button onClick={() => handleVote(video.id, 1)}>Up</button>
              <button onClick={() => handleVote(video.id, 0)}>Down</button>
            </>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default VideoItem;
