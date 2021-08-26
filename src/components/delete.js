import React from "react";

export default function Delete() {
	React.useEffect(() => {
		window.addEventListener("DOMContentLoaded", (event) => {
			[...document.querySelectorAll(".delete-button")].forEach((el) =>
				el.addEventListener("click", function (e) {
					console.log("Delete Pressed");
				})
			);
		});
	});

	//if delete button is clicked console.log
	return (
		<div className='column-wrapper'>
			<div className='column-one column'>
				<div className='column-name'>One</div>

				<br />
				<button className='delete-button'>X</button>
				<div className='card-wrapper card '>card 1</div>
			</div>
			<div className='column-two column'>
				Two
				<br />
				<button className='delete-button'>X</button>
				<div className='card-wrapper card'>card 2</div>
			</div>
			<div className='column-three column'>
				Three
				<br />
				<button className='delete-button'>X</button>
				<div className='card-wrapper card'>card 3</div>
			</div>
		</div>
	);
}
