import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar"
import AnimatedRoutes from "./Components/AnimatedRoutes"
import './App.scss';
import './Component-Styles/transitions.scss';


export default function App() {
  return (
    <div className="app">
			<Router>
			<Navbar />
			<AnimatedRoutes />
			</Router>
		</div>
  );
}