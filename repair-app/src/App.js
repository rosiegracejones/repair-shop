import "./App.css";
import vehicleInfo from "./data/vehicleInfo";
import InfoCard from "./components/InfoCard";

function App() {
	return (
		<>
			<div className="header">
				<h1>Repair Hub</h1>
			</div>
			<div className="vehicle-list">
				{vehicleInfo.map((vehicle) => {
					return (
						<InfoCard
							make={vehicle.make}
							model={vehicle.model}
							regNumber={vehicle.regNumber}
							notes={vehicle.notes}
							repairStatus={vehicle.repairStatus}
							key={vehicle.id}
						/>
					);
				})}
			</div>
		</>
	);
}

export default App;
