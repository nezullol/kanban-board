import React, { Component } from "react";

export default class Handlenewcolumn extends Component {
	constructor() {
		super();
		this.displayData = [];

		this.appendData = this.appendData.bind(this);
	}

	appendData() {
		this.displayData.push(<div id='display-data'>New Column</div>);
		this.setState({
			// showdata: this.displayData,
			// postVal: "",
		});
	}

	render() {
		return (
			<div>
				<input className='input-column'></input>
				<button onClick={this.appendData}>{this.props.makecolumn}</button>
				<div id='display-data-Container'>{this.displayData}</div>
			</div>
		);
	}
}
