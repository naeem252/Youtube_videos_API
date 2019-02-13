import React from "react";
import VideoItem from './VideoItem';
import './VideoItem.css';

const videoList = props => {
	const videoItem=props.videoList.map((video,key)=>{
		return <VideoItem videoSelect={props.onVideoSelect} key={key} video={video}/>;
	});
	return <div>{videoItem}</div>;
};

export default videoList;
