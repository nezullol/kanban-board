import React, { Component } from "react";
import Handlenewcolumn from "./handleNewColumn";
// import Delete from "./delete";

export default class Boardcolumn extends Component {
	render() {
		return (
			<div className='board-column'>
				<Handlenewcolumn />
			</div>
		);
	}
}
