import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
// export function Home() {
// 	return <Counter />;
// }

export const Counter = properties => {
	let numbersArray = properties.number.split("");
	const howManyCeros = 5 - numbersArray.length;

	for (let i = 0; i < howManyCeros.length; i++) {
		numbersArray.splice(0, 0, "0");
	}
	return (
		<h1 className="container d-flex bigCounter">
			<div className="Clock">
				<i className="far fa-clock" />
			</div>
			{numbersArray.map((num, i) => (
				<div key={i}>{num}</div>
			))}
		</h1>
	);
};
