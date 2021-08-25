import React, { Component } from "react";

export default class Cardmaker extends Component {
	// constructor() {
	// 	super();
	// }
	render() {
		const newcard = () => {
			console.log("hello card");
			// return <div className='new-column-'>HIIIIIII</div>;
		};

		return (
			<div>
				<input className='input-card'></input>
				<button onClick={newcard}>{this.props.cardmaker}</button>
			</div>
		);
	}
}
