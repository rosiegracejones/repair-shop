function InfoCard({ make, model, regNumber, notes, repairStatus, key }) {
	function updateCard() {
		console.log("Update button clicked");
	}

	function deleteCard(key) {
		// find the key of the card to delete
		// remove the card from the array
		// confirmation message
		// re-render page
	}

	return (
		<>
			<div className="infoCard">
				<h1>
					{make} {model}
				</h1>
				<p>Registration No: {regNumber}</p>
				<p>Repair Status: {repairStatus}</p>
				<p>Notes: {notes}</p>
				<button onClick={updateCard}>Update</button>
				<button onClick={deleteCard}>Delete</button>
			</div>
		</>
	);
}

export default InfoCard;