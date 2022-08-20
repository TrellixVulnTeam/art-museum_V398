import './App.scss';
import Navbar from "./Components/Navbar"
import BackgroundImage from "./Components/BackgroundImage"
import History from "./Components/History"

export default function App() {
	return (
		<div className="app">
			<Navbar />
			<BackgroundImage />
			<div className="container-lg">
			<History />
			</div>
		</div>
	);
}