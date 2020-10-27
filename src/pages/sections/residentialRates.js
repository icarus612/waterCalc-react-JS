import React from 'react';
import Input from '../components/input.js';
import 	PriceBox from '../sections/priceBox.js';

const ResidentialRates = (props) => {
	const [noSewer, setNoSewer] = React.useState(0);
	const [yesSewer, setYesSewer] = React.useState(0);
	const [subtotal, setSubtotal] = React.useState(0)
	const rates = [1.69, 2.18, 5.04, 9.55];

	const withSewer = (e) => {
		let x = 5.19 * e;
		for (let i = 0; i < e; i++) {
			x+=rates[Math.floor(i/4)];
		}
		setYesSewer(x.toFixed(2));
		setSubtotal((x + Number(noSewer) + 8.44).toFixed(2));
	}

	const withoutSewer = (e) => {
		let x = 0;
		for (let i = 0; i < e; i++) {
			x+=rates[Math.floor(i/4)];
		}
		setNoSewer(x.toFixed(2));
		setSubtotal((x + Number(yesSewer)  + 8.44).toFixed(2));
	}

	return (
		<React.Fragment>
				<div className="d-flex flex-column flex-wrap flex-md-row justify-content-start align-items-around">
						<h3 className="m-4">
								Residential Rates
						</h3>
						<div className="col-12 d-flex flex-column justify-content-start align-items-start">
								<Input label="With Sewer" type="number" className="col-6" placeholder={0} min={0} max={10000} onChange={(e)=> withSewer(e.target.value)} />
								<Input label="Without Sewer" type="number" className="col-6" placeholder={0} min={0} max={10000} onChange={(e)=> withoutSewer(e.target.value)} />
						</div>
				</div>
				<PriceBox yesSewer={yesSewer > 0 && yesSewer} noSewer={noSewer > 0 &&  noSewer} subtotal={subtotal > 8.45 ? subtotal : 0} />
		</React.Fragment>
	)
}
export default ResidentialRates;