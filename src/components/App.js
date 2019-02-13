import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./videoList";
import VideoDetail from "./VideoDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class App extends React.Component {
	state = { videos: [], selectedVideo: null };
	inputSubmited = term => {
		const KEY = "AIzaSyDHTsEGGOsC-EQPvNyqRrqDb3ygklgCi3k";
		axios
			.get("https://www.googleapis.com/youtube/v3/search", {
				params: {
					part: "snippet",
					maxRusults: 10,
					q: term,
					key: KEY
				}
			})
			.then(data => {
				this.setState({ videos: data.data.items,selectedVideo:data.data.items[0] });
				console.log(data)
			});
	};
	componentDidMount(){
		this.inputSubmited('faded')
	}

	onVideoSelect = video => {
		this.setState({ selectedVideo: video });
	};

	render() {
		return (
			<div className="container">
				<SearchBar onSubmit={this.inputSubmited} />
				<div className="row">
					<div className="col-md-7">
						<VideoDetail video={this.state.selectedVideo} />
					</div>
					<div className="col-md-5">
						<VideoList
							onVideoSelect={this.onVideoSelect}
							videoList={this.state.videos}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
