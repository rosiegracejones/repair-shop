import logo from "./logo.svg";
import "./App.css";
import vehicleInfo from "./vehicleInfo";

function App() {
	return (
		<>
			{vehicleInfo.make}
			{vehicleInfo.model}
			{vehicleInfo.registrationNumber}
			{vehicleInfo.notes}
			{vehicleInfo.repairStatus}
		</>
	);
}

export default App;
