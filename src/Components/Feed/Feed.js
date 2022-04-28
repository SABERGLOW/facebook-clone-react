import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "../Story/StoryReel";
import MessageSender from "../Feed/MessageSender";
import Post from "../Feed/Post";
import db from "../Firebase/firebase";
import { collection, orderBy, onSnapshot, query } from "firebase/firestore";

function Feed() {
	const [posts, setPosts] = useState([]);

/**
  * Renders the posts in the posts array.           
  */
	const renderPosts = () => {
		return posts.map((post) => (
			<Post
				key={post.id}
				profilePic={post.data.profilePic}
				message={post.data.message}
				timestamp={post.data.time}
				username={post.data.username}
				image={post.data.image}
			/>
		));
	};

/**
  * Sets the posts state to the posts in the Firestore database.           
  * @param {firebase.firestore.QuerySnapshot} snapshot - the snapshot of the posts in the database.           
  * @returns None           
  */
	useEffect(() => {
		onSnapshot(
			/**
			* Query the database for the given collection and order by clause that is time descending (newer posts first). 
			* @param {Collection} collection - The collection to query. 
			* @param {string} orderBy - The order by clause to use. 
			* @returns A promise that resolves to the query result. 
			*/
			query(collection(db, "posts"), orderBy("time", "desc")),
			(snapshot) => {
				var array = [];
				snapshot.forEach((doc) => {
					var post = {};
					post.id = doc.id;
					post.data = doc.data();
					post.data.time = new Date(new Date()).toISOString();
					post.data.time = post.data.time.substring(0, 10);
					array.push(post);
				});

				/**
				 * Sets the posts array to the given array.       
				 */
				setPosts(array);
			}
		);
	}, []);

	return (
		<div className='feed'>
			{/* Story Reel */}
			<StoryReel />
			{/* Message Sender  */}
			<MessageSender />
			{/* Post Message */}
			{renderPosts()}
		</div>
	);
}

export default Feed;
