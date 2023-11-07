function InfoCard({ make, model, regNumber, notes, repairStatus }) {
	return (
		<>
			<div className="infoCard">
				<h1>
					{make} {model}
				</h1>
				<p>Registration No: {regNumber}</p>
				<p>Repair Status: {repairStatus}</p>
				<p>Notes: {notes}</p>
			</div>
		</>
	);
}

export default InfoCard;