import { Routes, Route, useLocation } from "react-router-dom";
import History from "./History"
import BackgroundImage from "./BackgroundImage"
import {AnimatePresence} from 'framer-motion'
export default function AnimatedRoutes(){
	const location = useLocation();
	return(
		<AnimatePresence exitBeforeEnter>
			<Routes location = {location} key={location.pathname}>
					<Route path = "*" element = {<BackgroundImage />}/>
					<Route path = "/history" element = {<History />}/>
			</Routes>
		</AnimatePresence>
	)
}