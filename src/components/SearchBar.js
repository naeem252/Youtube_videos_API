import React from "react";

class SearchBar extends React.Component {
	state = { term: "" };
	onInputChange = e => {
		this.setState({ term: e.target.value });
	};

	onSubmitInput = e => {
		e.preventDefault();
		this.props.onSubmit(this.state.term);
		this.setState({term:''})
	};
	render() {
		return (
			<div className="card p-3 my-3">
				<form action="" onSubmit={this.onSubmitInput}>
					<div className="form-group">
						<label htmlFor="vSearch">Video Search</label>
						<input
							type="text"
							value={this.state.term}
							onChange={this.onInputChange}
							className="form-control"
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
