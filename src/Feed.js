import React from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import StoryReel from './StoryReel'

function Feed() {
    return (
        <div className='feed'>
            {/* Story Reel */}
            <StoryReel/>
            {/* Message Sender  */}
            <MessageSender/>
        </div>
    )
}

export default Feed