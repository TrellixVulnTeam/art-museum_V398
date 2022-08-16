import { useState, useEffect } from "react";
import "../Component-Styles/navbar.scss";

export default function Navbarr() {
	const [isHamburgerPressed, setIsHamburgerPressed] = useState<boolean>(false)
	const [scrollDir, setScrollDir] = useState<any>(null);
	function hamburgerPressFunction() {

		if (isHamburgerPressed) {
			setIsHamburgerPressed(false);
		} else {
			setIsHamburgerPressed(true);
		}
	}
	useEffect(() => {
		const threshold: number = 0;
		let lastScrollY = window.pageYOffset;
		let ticking: boolean = false;
		const updateScrollDir = () => {
			const scrollY = window.pageYOffset;

			if (Math.abs(scrollY - lastScrollY) < threshold) {
				ticking = false;
				return;
			}
			setScrollDir(scrollY > lastScrollY ? "down" : "up");
			lastScrollY = scrollY > 0 ? scrollY : 0;
			ticking = false;
		};

		const onScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(updateScrollDir);
				ticking = true;
			}
		};

		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, [scrollDir]);

	return (
		<>
			<div
				className={
					!scrollDir
						? "nav navbarFadeIn"
						: scrollDir === "down"
							? "nav scrolledNav"
							: "nav scrolledNavUp"
				}
			>
				<input type="checkbox" id="nav-check" />

				<div className={isHamburgerPressed === false ? "nav-links rolledUpNavLinks" : "nav-links"} onClick={() => setIsHamburgerPressed(false)}>
					<a href="#">Home</a>
					<a href="#">Events</a>
					<a href="#">Gallery</a>
					<div className="logoWrapper">
						<div className='logo'>
							<img
								src="https://www.upload.ee/image/14420032/museum-icon-12886.png"
								alt="museum icon"
								id="museum-logo" />
							<p>Vani Museum</p>
						</div>
					</div>
					<a href="#">Updates</a>
					<a href="#">History</a>
					<a href="#">Contact</a>
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
