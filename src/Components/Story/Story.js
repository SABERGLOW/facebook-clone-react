import React from "react";
import "./Story.css";
import { Avatar } from "@mui/material";

/**
 * A component that displays a story.
 * @param {string} image - the image to display
 * @param {string} profileSrc - the source of the profile picture
 * @param {string} title - the title of the story, the username
 *
 */
function Story({ image, profileSrc, title }) {
	return (
		<div style={{ backgroundImage: `url(${image})` }} className='story'>
			<Avatar className='story__avatar' src={profileSrc} />
			<h4>{title}</h4>
		</div>
	);
}

export default Story;
