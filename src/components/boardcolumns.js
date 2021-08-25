import React, { Component } from "react";
import Cardmaker from "./cardmaker";
import Handlenewcolumn from "./handleNewColumn";
import Rendercolumn from "./rendercolumn";

export default class Boardcolumn extends Component {
	render() {
		const cardmaker = <div>Make NEW Card</div>;
		const makecolumn = <div> Make New COLUMN </div>;
		return (
			<div className='board-columns'>
				<Handlenewcolumn makecolumn={makecolumn} />
				<Cardmaker cardmaker={cardmaker} />
				<Rendercolumn />
			</div>
		);
	}
}
