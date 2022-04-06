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
            <Post/>
        </div>
    )
}

export default Feed