import "../Component-Styles/backgroundImage.scss";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { motion } from "framer-motion"
import { useState } from "react";
export default function BackgroundImage() {
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<div className="backgroundImage" onLoad={() => setIsLoaded(true)}
		>
			<div className="imageText">
				<div>
					<p className="quoteParagraph p-1">
						One Small Step For Man.
					</p>
					<p className="quoteParagraph p-2">
						One Giant Leap For Mankind.
					</p>
				</div>
				<motion.a
					href="#main" id="backgroundImageAnchor"
					initial={{ opacity: 0 }} whileHover={{ scale: 1.2, transition: { duration: 1 }, }}
					whileTap={{ scale: 0.9 }}
					whileInView={{ opacity: 1 }}>
					Explore The Universe
					<KeyboardArrowDownIcon />
				</motion.a>
			</div>
		</ div>
	);
}