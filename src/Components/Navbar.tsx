import { useState, useEffect } from "react";
import "../Component-Styles/navbar.scss";
import {motion} from "framer-motion";


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
			<div
				className={
					yPosition > 100 ? "nav scrolledDownNav" : "nav navbarFadeIn"
				}>
				<input type="checkbox" id="nav-check" />

				<div className={isHamburgerPressed === false ? "nav-links rolledUpNavLinks" : "nav-links"} onClick={() => setIsHamburgerPressed(false)}>
					<motion.a animate={{y: 0}} transition={{delay: 1}} initial={{y: -50}} href="#">Home</motion.a>
					<motion.a animate={{y: 0}} transition={{delay: 1.10}} initial={{y: -50}} href="#">Events</motion.a>
					<motion.a animate={{y: 0}} transition={{delay: 1.20}} initial={{y: -50}} href="#">Gallery</motion.a>
				<div className="logoWrapper">
					<motion.div animate={{y: 0}} transition={{delay: 1.60}} initial={{y: -150}} className='logo'>
						<img
							src="https://www.upload.ee/image/14420032/museum-icon-12886.png"
							alt="museum icon"
							id="museum-logo" />
							<p>Lorem Ipsum Museum</p>
						</motion.div>
					</div>
				<motion.a animate={{y: 0}} transition={{delay: 1.30}} initial={{y: -50}} href="#">Updates</motion.a>
				<motion.a animate={{y: 0}} transition={{delay: 1.40}} initial={{y: -50}} href="#">History</motion.a>
				<motion.a animate={{y: 0}} transition={{delay: 1.50}} initial={{y: -50}} href="#">Contact</motion.a>
				</div>
			<div className="nav-btn" onClick={() => hamburgerPressFunction()}>
				<label htmlFor="nav-check">
					<span></span>
					<span></span>
					<span></span>
					</label>
				</div>
			</div>
		</>
	);
}
