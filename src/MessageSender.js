import React from 'react'
import './MessageSender.css'
import { Avatar } from '@mui/material'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import profileAvatar from './assets/profileAvatar.jpg'

function MessageSender() {

    const handleSubmit = (e) =>{
        e.preventDefault(); //... prevent default refresh when pressing enter/submit
    }
    return (
        <div className='messageSender'>
            <div className='messageSender__top'> {/*... top part will contain avatar, message+image ...*/}
            <Avatar src = {profileAvatar} alt='Facebook Profile Avatar'/>
                <form>

                    <input
                        className='messageSender__input'
                        placeholder={`What's on your mind, Wali Ullah`}>
                    </input>

                    <input
                        placeholder={`Image URL (Optional)`}>
                    </input>

                    <button type="submit" onClick={handleSubmit}>
                    </button>

                </form>
            </div>

            <div className='messageSender__bottom'> {/*... bottom part will contain live vid, photo, activity options ...*/}
                
                <div className="messageSender__option">
                    <VideocamIcon style={{color: "red"}}/>
                    <h3> Live video</h3>
                </div>

                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color: "green"}}/>
                    <h3> Photo/video</h3>
                </div>

                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{color: "orange"}}/>
                    <h3> Feeling/activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender