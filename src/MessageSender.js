import React, { useState } from 'react'
import './MessageSender.css'
import { Avatar } from '@mui/material'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
//import profileAvatar from './assets/profileAvatar.jpg'
import {useStateValue} from "./StateProvider.js"

function MessageSender() {

    const[{user}, dispatch] = useStateValue();
    //... track input for our newsfeed message posting ...//
    const [input, setInput] = useState(""); 
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault(); //... prevent default refresh when pressing enter/submit

        //... handle some db stuff here ...//
        setInput("");
        setImageUrl("");
    }
    return (
        <div className='messageSender'>
            <div className='messageSender__top'> {/*... top part will contain avatar, message+image ...*/}
            <Avatar src = {user.photoURL} alt='Facebook Profile Avatar'/>
                <form>
                    
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className='messageSender__input'
                        placeholder={`What's on your mind, ${user.displayName}?`}>
                    </input>

                    <input
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
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