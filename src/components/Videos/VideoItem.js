import React from 'react';
import { useSelector } from 'react-redux';
import ReactPlayer from 'react-player/youtube';
import { selectIsAuth } from '../../selector/auth/selectAuth';
import dislike from '../../assets/dislike.png';
import like from '../../assets/like.png';

const VideoItem = ({ video, onVote }) => {
  const isAuth = useSelector(selectIsAuth);
  const handleVote = (videoId, type) => {
    onVote(videoId, type);
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: '20px',
      }}
    >
      <div style={{ marginRight: '30px' }}>
        <ReactPlayer
          width="320px"
          height="240px"
          url={video.url}
          style={{ width: '320px' }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <div
          role="heading"
          aria-level={1}
          style={{
            fontSize: 'bold',
          }}
        >
          <b>{video.title}</b>
        </div>
        <div>Shared by: {video.author}</div>
        <div>
          {video.vote_up}{' '}
          <img
            src={like}
            alt="vote_up"
            style={{ width: '24px', marginRight: '10px' }}
          />
          {video.vote_down}{' '}
          <img src={dislike} alt="vote_down" style={{ width: '24px' }} />
        </div>
        <div>
          Description:
          <p
            style={{
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 5,
              WebkitBoxOrient: 'vertical',
              textOverflow: 'ellipsis',
            }}
          >
            {video.subtitle}
          </p>
        </div>
        <div>
          {isAuth && (
            <>
              <button onClick={() => handleVote(video.id, 1)}>Up</button>
              <button onClick={() => handleVote(video.id, 0)}>Down</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
