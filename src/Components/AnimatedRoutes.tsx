import { Routes, Route, useLocation } from "react-router-dom";
import Events from "./Events"
import Details from "./Details"
import BackgroundImage from "./BackgroundImage"
import {AnimatePresence} from 'framer-motion'

export default function AnimatedRoutes(){
	const location = useLocation();
	return(
		<AnimatePresence exitBeforeEnter>
			<Routes location = {location} key={location.pathname}>
					<Route path = "*" element = {<BackgroundImage />}/>
					<Route path = "/events" element = {<Events />}/>
					<Route path = "/details" element = {<Details />}/>
			</Routes>
		</AnimatePresence>
	)
}