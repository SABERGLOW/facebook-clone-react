import React from 'react'
import { Avatar } from '@mui/material';
import './Contacts.css';

/**
 * A component that displays a contact's information.           
 * @param {string} ImageURL - the URL of the contact's image.           
 * @param {string} title - the title of the contact, the username.                    
 */
function Contacts({ImageURL, title}) {
    return (
        <div className='contacts'>
            {ImageURL && <Avatar className="avatar" src={ImageURL} />}
            <h4>{title}</h4>
        </div>
    )
}

export default Contacts