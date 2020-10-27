import React, { useState } from "react";
import Button from './components/button.js';

import {
	FirstCard,
	CommercialRates,
	ResidentialRates,
} from "./sections/router.js";

const Rates = (props) => {
	const [position, setPosition] = useState("F");

	const cards = {
		"F": <FirstCard onChange={(e) => setPosition(e)} />,
		"R": <ResidentialRates />,
		"C": <CommercialRates />,
	};

	return (
		<div className="container flex-wrap flex-row d-flex justify-content-center align-items-center vh-100">
			<div className="col-12 col-md-8" >
				<div className="card">
					{ position !== "F" && <Button onClick={()=> setPosition("F")} value="back" className="back-btn" />}
					{ cards[position] }
				</div>
			</div>
		</div>
	);
};

export default Rates;
