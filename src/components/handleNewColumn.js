import React, { Component } from "react";

export default class Handlenewcolumn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
		};
		this.displayData = [];
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleDelete() {
		console.log(this.displayData.length);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}
	handleSubmit() {
		this.displayData.push(
			<div key={this.displayData.length} id='display-data'>
				{this.state.value}
				<button className='delete' onClick={this.handleDelete}>
					{" "}
					X{" "}
				</button>
			</div>
		);
		this.setState({
			value: "",
		});
		console.log(this.displayData.length);
	}

	render() {
		return (
			<div>
				<input
					className='input-card'
					value={this.state.value}
					onChange={this.handleChange}></input>
				<input onClick={this.handleSubmit} value='Make Column' type='submit' />
				<div className='Column'>{this.displayData}</div>
			</div>
		);
	}
}
