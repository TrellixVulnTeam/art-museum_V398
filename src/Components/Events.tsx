import "../Component-Styles/events.scss";
import AnimatedPage from "../AnimatedPage";
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import Item from './Item'
export default function BackgroundImage() {
	let description1 = 'id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue	mauris augue neque gravida in fermentum';
	let description2 = 'amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis';
	let events = [
		{name: "Lorem Ipsum Exhibition",
		 description: description1,
		 imgSrc:'https://www.buddhistdoor.net/upload/file/20180406/16619/9b01834e01e2d4fb7e75fd1d9a9d7251_715__2.png',
		 tags: 'Lorem Ipsum',
		 subject: 'History'
		},
		{name: "Lorem Ipsum Exhibition",
		 description: description2,
		 imgSrc:'https://www.insightmuseumexhibits.com/wp-content/uploads/2010/02/museum-exhibits-page.jpg',
		 tags: 'Lorem Ipsum',
		 subject: 'Art'
		},
		{name: "Lorem Ipsum Exhibition",
		 description: description1,
		 imgSrc:'https://upload.wikimedia.org/wikipedia/commons/5/53/Museum_exhibits.jpg',
		 tags: 'Lorem Ipsum',
		 subject: 'Jurrasic History'
		},
		{name: "Lorem Ipsum Exhibition",
		 description: description2,
		 imgSrc:'https://fristartmuseum.org/wp-content/uploads/Knights-in-Armor-horses-900x0-c-default.jpg',
		 tags: 'Lorem Ipsum',
		 subject: 'Medieval History'
		},
		{name: "Lorem Ipsum Exhibition",
		 description: description1,
		 imgSrc:'https://assets-delawaretoday-com.s3-accelerate.amazonaws.com/2020/03/delaware-museums-online-exhibits.jpg',
		 tags: 'Lorem Ipsum',
		 subject: 'Art'
		},
		{name: "Lorem Ipsum Exhibition",
		 description: description1,
		 imgSrc:'https://upload.wikimedia.org/wikipedia/commons/5/53/Museum_exhibits.jpg',
		 tags: 'Lorem Ipsum',
		 subject: 'Jurrasic History'
		},
	]
	console.log(events)
	return (
		<AnimatedPage>
			<div className='eventsWrapper'>
					<div id="events">
					<h1 id="activeEventsHeader">Active Events </h1>
					<ScrollingCarousel show={3.5} slide={2} transition={0.5} swiping = {true}>
						{events.map((event)=> {
							{return(
								<Item
									description = {event.description}
									imgSrc={event.imgSrc}
									tags={event.tags}
									subject = {event.subject}
								/>
							)}
						})}
					</ScrollingCarousel>
					</div>
			</div>
			

		</AnimatedPage>
	);
}