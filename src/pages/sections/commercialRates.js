import React from 'react';
import Input from '../components/input.js';
import Button from '../components/button.js';
import 	PriceBox from '../sections/priceBox.js';

const CommercialRates = (props) => {
	const [meterSize, setmeterSize] = React.useState(1);
	const [usage, setUsage] = React.useState(0);
    const [subtotal, setSubtotal] = React.useState(0);
    const [sewer, setSewer] = React.useState(false);
    const meter = {
        "0.75": [1.29, 8.7],
        "1": [3.22, 21.76],
        "1.5": [6.45, 43.52],
        "2": [10.32, 69.63],
        "3": [21.28, 143.61], 
        "4": [35.03, 236.45],
        "6": [70.92, 478.7],
        "8": [141.84, 957.4],
        "10": [270.76, 1828],
        "12": [341.7, 2306]
    };

	const setPrice = (u, l, s) => {
        const newSewer = s ? 8.01 : 2.29;
        setSewer(s);
        setUsage(u);
        setmeterSize(l);
        setSubtotal(((Number(u) * newSewer) + (s ? meter[l][0] +meter[l][1] : meter[l][0]) + 8.44).toFixed(2));
	}

	return (
		<React.Fragment>
            <div className="d-flex flex-column flex-wrap flex-md-row justify-content-start align-items-around">
                <h3 className="m-4">
                    Commercial Rates
                </h3>
                <div className="col-12 d-flex flex-column justify-content-start align-items-start">
                    <Input label="Sewer?" type="checkbox" className="pl-3" value={sewer} onChange={()=> setPrice(usage, meterSize, !sewer)} />
                    <div  className="col-6">
                        <Button type="select" value={meterSize} options={[0.75, 1, 1.5, 2, 3, 4, 6, 8, 10, 12]} onChange={(e)=> setPrice(usage, e, sewer)} /> <span className="pl-2">Meter Size</span>
                    </div>
                    <Input label="Water Usage" type="number" className="col-6" placeholder={0} min={0} max={10000} onChange={(e)=> setPrice(e.target.value, meterSize, sewer)} />
                </div>
            </div>
            <PriceBox comSewer={usage > 0 && sewer} meter={usage > 0 && meter[meterSize]} subtotal={usage > 0 ? subtotal : 0} />
		</React.Fragment>
	)
}
export default CommercialRates;