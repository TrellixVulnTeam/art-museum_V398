import "../Component-Styles/details.scss";

import { useNavigate } from "react-router-dom";
import AnimatedPage from "../AnimatedPage";
import { useContext } from "react";
import { EventsContext } from "../Context/EventsContext";

export default function Details(){
	const events = useContext(EventsContext);
	let navigate = useNavigate();
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let eventId = params.get("eventdetails");
	
	let event = events.find(event => event.id == eventId);
	
	return(
		<AnimatedPage>
			<div className="detailsWrapper">
				<div className="details">
					<h1 className="eventNameHeader">{event?.name}</h1>
					<div className='rightLeftWrapper'>
						<div className="detailsLeft">					
						{event ? <img src={event?.imgSrc} alt="Event" /> : <></>}
						</div>
						<div className="detailsRight">					
							<div>
								<p>October 29</p>
								<p>11:00 am - 19:00 pm</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</AnimatedPage>
	)
}