import "../Component-Styles/events.scss";
import AnimatedPage from "../AnimatedPage";
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import { useNavigate } from "react-router-dom";
import Item from './Item'
import { useContext } from "react";
import { EventsContext } from "../Context/EventsContext";


export default function BackgroundImage() {
	const events = useContext(EventsContext);

	let navigate = useNavigate();

	function getDetails(id) {
    //Redirects the page
    navigate(`/details?eventdetails=${id}`);
  }
	
	return (
		<AnimatedPage>
			<div className='eventsWrapper'>
				<div id="blurLayer">
					<div id="events">
						<h1 id="activeEventsHeader">Active Events </h1>
						<ScrollingCarousel show={3.5} slide={2} transition={0.5} swiping = {true}>
							{events.map((event)=> {
								{return(
									<div onClick = {() => getDetails(event.id)} key = {event.id} className="eventWrapper">
										<Item
										description = {event.description}
										imgSrc={event.imgSrc}
										tags={event.tags}
										subject = {event.subject}
										/>
									</div>
									
								)}
							})}
						</ScrollingCarousel>
					
					</div>
				</div>
			</div>
			

		</AnimatedPage>
	);
}