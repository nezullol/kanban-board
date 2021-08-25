import React, { Component } from "react";

export default class Cardmaker extends Component {
	constructor() {
		super();
		this.displayData = [];

		this.appendData = this.appendData.bind(this);
	}

	appendData() {
		this.displayData.push(<div id='display-data'>New Card</div>);
		this.setState({
			// showdata: this.displayData,
			// postVal: "",
		});
	}

	render() {
		// const newcard = () => {
		// 	console.log("hello card");
		// };

		return (
			<div>
				<input className='input-card'></input>
				<button onClick={this.appendData}>{this.props.cardmaker}</button>

				<div id='display-data-Container'>{this.displayData}</div>
			</div>
		);
	}
}
