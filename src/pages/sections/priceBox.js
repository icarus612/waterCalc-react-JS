import React from 'react';

const PriceBox = (props) => {
	return (
		<div className="price-card p-3">
			{props.yesSewer && (
				<h4 className="px-3 bold">
					With Sewer:  <span className="float-right">$ {props.yesSewer}</span>
				</h4>	
			)}
			{props.noSewer && (
				<h4 className="px-3 bold">
					Without Sewer:  <span className="float-right">$ {props.noSewer}</span>
				</h4>	
			)}
			{props.meter && (
				<h4 className="px-3 bold">
					Water Availability Fee:  <span className="float-right">$ {props.meter[0]}</span>
				</h4>	
			)}
			{props.comSewer && (
				<h4 className="px-3 bold">
					Sewer Availability Fee:  <span className="float-right">$ {props.meter[1]}</span>
				</h4>	
			)}
			{props.subtotal > 0 && (
				<h4 className="px-3 bold">
					Fixed Fees:  <span className="float-right">$ 8.44</span>
				</h4>	
			)}
			<hr />
			<h4 className="px-3 bold">
				Subtotal:  <span className="float-right">$ {props.subtotal}</span>
			</h4>				
		</div>
	);
}
	
export default PriceBox