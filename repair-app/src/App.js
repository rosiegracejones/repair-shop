import "./App.css";
import vehicleInfo from "./data/vehicleInfo";
import InfoCard from "./components/InfoCard";

function App() {

	return (
		<>
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

		</>
	);
}

export default App;
