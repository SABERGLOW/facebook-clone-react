import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'


function Feed() {
    return (
        <div className='feed'>
            {/* Story Reel */}
            <StoryReel/>
            {/* Message Sender  */}
            <MessageSender/>
            {/* Post Message */}
            <Post
                profilePic="https://media.istockphoto.com/photos/parliament-in-budapest-picture-id1163188578?k=20&m=1163188578&s=612x612&w=0&h=cO1dkCU9RBb-BNFzxmBGnad90Jo7S8c2VNTApUijKBs="
                message="message..."
                timestamp="timestamp"
                username="Wali Ullah"
                image="https://cdn.cnn.com/cnnnext/dam/assets/180508123453-destination-budapest.jpg"
            />
        </div>
    )
}

export default Feed