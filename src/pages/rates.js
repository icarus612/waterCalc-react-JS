import React from 'react';
import '../application.css';
import Residential from '../components/residentialRates.js';
import Commercial from '../components/commercialRates.js';

  
const Rates = () => {
	const [system, setSystem] = useState("R")
	return (
		<article id="contact">
			<section className="py-5 h-100vh d-flex flex-wrap overflow-hidden color-change-bg">
				<div className='container flex-wrap flex-row d-flex justify-content-center align-items-center'>
					<div className="col-12">
						<div className="card">
							<h1 className="text-center m-4">
								What Type of System do you have? 
							</h1>
							{system === "R" ? <Residential /> : <Commercial />}
						</div>
					</div>
				</div>
			</section>
		</article>
	);
}

export default Rates;
