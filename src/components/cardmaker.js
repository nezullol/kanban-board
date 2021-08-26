import React, { Component } from "react";

export default class Cardmaker extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.displayData = [];
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}
	handleSubmit() {
		this.displayData.push(<div id='display-data'>{this.state.value}</div>);
		this.setState({
			value: "",
		});
	}

	render() {
		return (
			<div>
				<input
					className='input-card'
					value={this.state.value}
					onChange={this.handleChange}></input>
				<input onClick={this.handleSubmit} value='Make Card' type='submit' />
				<div className='Card'>{this.displayData}</div>
			</div>
		);
	}
}
