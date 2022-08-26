import { useState, useEffect } from "react";
import "../Component-Styles/navbar.scss";
import {motion} from "framer-motion";
import '../Component-Styles/transitions.scss';
import {Link} from "react-router-dom"

export default function Navbarr() {
	const [isHamburgerPressed, setIsHamburgerPressed] = useState<boolean>(false);
	const [yPosition, setYPosition] = useState<number>(0)
	function hamburgerPressFunction() {

		if (isHamburgerPressed) {
			setIsHamburgerPressed(false);
		} else {
			setIsHamburgerPressed(true);
		}
	}

	useEffect(() => {
		const handleScroll = () => {
			const position = window.pageYOffset;
			setYPosition(position);
		};
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<motion.div
				animate={{opacity: 1}}
				initial={{opacity: 0}}
				transition={{duration: 2}}
				className={
					yPosition > 100 ? "nav scrolledDownNav" : "nav navbarFadeIn"
				}>
				<input type="checkbox" id="nav-check" />

				<div className={isHamburgerPressed === false ? "nav-links rolledUpNavLinks" : "nav-links"} onClick={() => setIsHamburgerPressed(false)}>
					<Link to="/history">Home</Link>
					<Link to="/">Events</Link>
					<Link to="#">Gallery</Link>
				<div className="logoWrapper">
					<div className='logo'>
						<img
							src="https://www.upload.ee/image/14420032/museum-icon-12886.png"
							alt="museum icon"
							id="museum-logo" />
							<p>Lorem Ipsum Museum</p>
						</div>
					</div>
				<Link to="#">Updates</Link>
				<Link to="#">History</Link>
				<Link to="#">Contact</Link>
				</div>
			<div className="nav-btn" onClick={() => hamburgerPressFunction()}>
				<label htmlFor="nav-check">
					<span></span>
					<span></span>
					<span></span>
					</label>
				</div>
			</motion.div>
		</>
	);
}
