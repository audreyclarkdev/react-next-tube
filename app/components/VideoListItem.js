import React from 'react';
import Image from 'next/image'

export const VideoListItem = ({ video, onVideoSelect }) => {

  console.log('video: ', video)
  
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className='list-group-item'>
      <div className='video-list-media'>
        <div className='media-left'>
          <Image className='media-object' src={imageUrl} alt='screengrab of video' />
        </div>
        <div className='media-body'>
          <div className='media-heading'>{video.snippet.title}</div>
        </div>
      </div>
    </li>
  )
}