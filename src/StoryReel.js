import React from 'react'
import './StoryReel.css'
import Story from './Story'
import profileAvatar from './assets/profileAvatar.jpg'
import storyImage1 from "./assets/StoryReelPictures/story1.jpg"
import storyImage2 from "./assets/StoryReelPictures/story2.jpg"
import storyImage3 from "./assets/StoryReelPictures/story3.jpg"
import storyImage4 from "./assets/StoryReelPictures/story4.jpg"
import storyImage5 from "./assets/StoryReelPictures/story5.jpg"


function StoryReel() {
    return (
        <div className='storyReel'>
            {/* Story */}
            <Story 
            image={storyImage1}
            profileSrc={profileAvatar}
            title="Wali Ullah"
            />

            <Story 
            image={storyImage2}
            profileSrc={profileAvatar}
            title="Bruno Goodboi"
            />

            <Story 
            image={storyImage3}
            profileSrc={profileAvatar}
            title="Losing Focus"
            />

            <Story 
            image={storyImage4}
            profileSrc={profileAvatar}
            title="Losing Focus"
            />

            <Story 
            image={storyImage5}
            profileSrc={profileAvatar}
            title="Wali Ullah"
            />

        </div>
    )
}

export default StoryReel