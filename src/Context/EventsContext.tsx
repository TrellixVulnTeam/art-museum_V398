import { useState, createContext } from "react";

export const EventsContext = createContext({});

export const EventsContextProvider = ({ children }) => {
	  let description1 = 'id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue	mauris augue neque gravida in fermentum';
		let description2 = 'amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis';
		let events = [
		{
		 id: 1,
		 name: "Lorem Ipsum Exhibition",
		 description: description1,
		 imgSrc:'https://www.buddhistdoor.net/upload/file/20180406/16619/9b01834e01e2d4fb7e75fd1d9a9d7251_715__2.png',
		 tags: 'Lorem Ipsum',
		 subject: 'History'
		},
		{
		 id: 2,
		 name: "Lorem Ipsum Exhibition",
		 description: description2,
		 imgSrc:'https://www.insightmuseumexhibits.com/wp-content/uploads/2010/02/museum-exhibits-page.jpg',
		 tags: 'Lorem Ipsum',
		 subject: 'Art'
		},
		{
		 id: 3,
		 name: "Lorem Ipsum Exhibition",
		 description: description1,
		 imgSrc:'https://upload.wikimedia.org/wikipedia/commons/5/53/Museum_exhibits.jpg',
		 tags: 'Lorem Ipsum',
		 subject: 'Jurrasic History'
		},
		{
		 id: 4,
		 name: "Lorem Ipsum Exhibition",
		 description: description2,
		 imgSrc:'https://fristartmuseum.org/wp-content/uploads/Knights-in-Armor-horses-900x0-c-default.jpg',
		 tags: 'Lorem Ipsum',
		 subject: 'Medieval History'
		},
		{
		 id: 5,
		 name: "Lorem Ipsum Exhibition",
		 description: description1,
		 imgSrc:'https://assets-delawaretoday-com.s3-accelerate.amazonaws.com/2020/03/delaware-museums-online-exhibits.jpg',
		 tags: 'Lorem Ipsum',
		 subject: 'Art'
		},
		{
		 id: 6,
		 name: "Lorem Ipsum Exhibition",
		 description: description1,
		 imgSrc:'https://upload.wikimedia.org/wikipedia/commons/5/53/Museum_exhibits.jpg',
		 tags: 'Lorem Ipsum',
		 subject: 'Jurrasic History'
		},
	]
	
  return (
    <EventsContext.Provider value = {events}>
      {children}
    </EventsContext.Provider>
  );
};
