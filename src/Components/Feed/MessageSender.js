import React, { useState } from "react";
import "./MessageSender.css";
import { Avatar } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
//import profileAvatar from './assets/profileAvatar.jpg'
import { useStateValue } from "../Context API/StateProvider.js";

import db from "../Firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function MessageSender() {
	const [input, setInput] = useState("");
	const [imageURL, setImageURL] = useState("");
	// eslint-disable-next-line no-unused-vars
	const [{ user }, dispatch] = useStateValue();

	/**
	 * Handles the submission of the form that is our "post"       
	 * @param {Event} e - The event object.       
	 */
	const handleSubmit = (e) => {
		e.preventDefault();

		/**
		 * Adds a new post to the database.       
		 * @param {firebase.firestore.CollectionReference} collection - The collection to add the post to.       
		 * @param {object} data - The data to add to the post.          
		 */
		addDoc(collection(db, "posts"), {
			message: input,
			profilePic: user.photoURL,
			time: serverTimestamp(),
			username: user.displayName,
			image: imageURL,
		});

		// Database stuff
		setInput("");
		setImageURL("");
	};

	return (
		<div className='messageSender'>
			<div className='messageSender__top'>
				{" "}
				{/*... top part will contain avatar, message+image ...*/}
				<Avatar src={user.photoURL} alt='Facebook Profile Avatar' />
				<form action="">
                <input
                        value = {input}
                        onChange={(e) => setInput(e.target.value)}
                        className='messageSender__input'
                        placeholder={`What's on your mind, ${user.displayName}?`}>
                    </input>

                    <input
                        value = { imageURL }
                        onChange={(e) => setImageURL(e.target.value)}
                        placeholder={`Image URL (Optional)`}>
                    </input>

					<button type='submit' onClick={handleSubmit}></button>
				</form>
			</div>

			<div className='messageSender__bottom'>
				{" "}
				{/*... bottom part will contain live vid, photo, activity options ...*/}
				<div className='messageSender__option'>
					<VideocamIcon style={{ color: "red" }} />
					<h3> Live video</h3>
				</div>
				<div className='messageSender__option'>
					<PhotoLibraryIcon style={{ color: "green" }} />
					<h3> Photo/video</h3>
				</div>
				<div className='messageSender__option'>
					<InsertEmoticonIcon style={{ color: "orange" }} />
					<h3> Feeling/activity</h3>
				</div>
			</div>
		</div>
	);
}

export default MessageSender;
