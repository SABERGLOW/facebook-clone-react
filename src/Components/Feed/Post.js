import React from "react";
import { Avatar } from "@mui/material";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import ReplyRoundedIcon from "@mui/icons-material/ReplyRounded";
import "./Post.css";

function Post({ profilePic, image, username, timestamp, message }) {
	return (
		<div className='post'>
			{/*... Top of the Post has Profile Pic aka Avatar ...*/}
			<div className='post__top'>
				<Avatar className='post__avatar' src={profilePic} />

				{/*... Top of the Post also UserName and TimeStamp ...*/}
				<div className='post__topInfo'>
					<h3>{username}</h3>
					<p>{timestamp}</p>
				</div>
			</div>

			{/*... Botom of the Post has actual Message and Image ...*/}
			<div className='post__bottom'>
				<p>{message}</p>
			</div>

			<div className='post__image'>
				{!image ? (
					<></>
				) : (
					<>
						<img src={image} alt='' />
					</>
				)}
			</div>

			{/*... Botom of the Post has Like Comment Share Icons ...*/}
			<div className='post__options'>
				<div className='post__option'>
					<ThumbUpAltOutlinedIcon />
					<p>Like</p>
				</div>

				<div className='post__option'>
					<ChatBubbleOutlineRoundedIcon />
					<p>Comment</p>
				</div>

				<div className='post__option'>
					<ReplyRoundedIcon
						style={{ transform: "rotateY(180deg)" }}
					/>
					<p>Share</p>
				</div>
			</div>
		</div>
	);
}

export default Post;
