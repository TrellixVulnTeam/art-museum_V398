import { Routes, Route, useLocation } from "react-router-dom";
import Events from "./Events"
import BackgroundImage from "./BackgroundImage"
import {AnimatePresence} from 'framer-motion'

export default function AnimatedRoutes(){
	const location = useLocation();
	return(
		<AnimatePresence exitBeforeEnter>
			<Routes location = {location} key={location.pathname}>
					<Route path = "*" element = {<BackgroundImage />}/>
					<Route path = "/events" element = {<Events />}/>
			</Routes>
		</AnimatePresence>
	)
}