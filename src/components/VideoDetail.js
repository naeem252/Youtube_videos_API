import React from "react";

const VideoDetail = ({ video }) => {
	if (!video) {
		return null;
	}
	const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`;
	return (
		<div className="card mb-3">
			<div className="card-body">
				<iframe title={video.snippet.title} src={videoSrc} style={{width:100+'%',height:350+'px'}} frameBorder="0"></iframe>
			</div>
			<div className="card-footer">
				<h4>{video.snippet.title}</h4>
				<p>{video.snippet.description}</p>
			</div>
		</div>
	);
};
export default VideoDetail;
