import React from 'react';

const VideoItem=({ video,videoSelect })=>{
	return (
		<div onClick={()=>videoSelect(video)} className='media'>
		  <img className='img-thumbnail fluid rounded media-img' src={video.snippet.thumbnails.medium.url} alt=""/>
		  <span className=' ml-3 d-inline'>{video.snippet.title}</span>
		</div>
	);
}

export default VideoItem;