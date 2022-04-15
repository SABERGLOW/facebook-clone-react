import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./firebase.js";
import { collection, orderBy, onSnapshot, query } from "firebase/firestore";

function Feed() {
	const [posts, setPosts] = useState([]);

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

	useEffect(() => {
		onSnapshot(
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
