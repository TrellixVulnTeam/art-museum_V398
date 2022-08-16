import "../Component-Styles/backgroundImage.scss";
import { useState } from "react";
export default function BackgroundImage() {
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<div className="backgroundImage" onLoad={() => setIsLoaded(true)}
		>
			<div className="imageText">
				<h2>We preserve History To build Future</h2>
			</div>
		</ div>
	);
}