import React from 'react'
import { Avatar } from '@mui/material';
import './Contacts.css';

function Contacts({ImageURL, title}) {
    return (
        <div className='contacts'>
            {ImageURL && <Avatar classname="avatar" src={ImageURL} />}
            <h4>{title}</h4>
        </div>
    )
}

export default Contacts