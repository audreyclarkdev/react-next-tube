'use client';
import React from 'react';

export const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div className='text-center font-weight-bold text-uppercase'>
        <h3>Enter a search term to get started</h3>
      </div>
    );
  }

  const url = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
		<div className='video-detail col-12 col-md-8 mx-auto'>
			<div className='embed-responsive'>
				<iframe className='embed-responsive-item' src={url} />
			</div>
			<div className='details'>
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};