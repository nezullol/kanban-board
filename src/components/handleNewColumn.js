import React, { Component } from "react";

export default class Handlenewcolumn extends Component {
	render() {
		const newcolumn = () => {
			console.log("hello column");
			// return <div className='new-column-'>HIIIIIII</div>;
		};
		return (
			<div>
				<input className='input-column'></input>
				<button onClick={newcolumn}>{this.props.makecolumn}</button>
			</div>
		);
	}
}
