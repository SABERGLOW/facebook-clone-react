import React from 'react'
import './Header.css'
import logo from '../../assets/logo512.png'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Avatar } from '@mui/material';
//import profileAvatar from './assets/profileAvatar.jpg'
//import AddIcon from '@mui/icons-material/Add';
//import ForumIcon from '@mui/icons-material/Forum';
//import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
//import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import TopHeaderNotificationIcon from '../../assets/Facebook Web Icons/TopHeaderNotificationIcon.png';
import TopHeaderExpandMoreIcon from '../../assets/Facebook Web Icons/TopHeaderExpandMoreIcon.png';
import TopHeaderMenuIcon from '../../assets/Facebook Web Icons/TopHeaderMenuIcon.png';
import TopHeaderMessengerIcon from '../../assets/Facebook Web Icons/TopHeaderMessengerIcon.png';
import {useStateValue} from "../Context API/StateProvider.js"

function Header() {
    // eslint-disable-next-line no-unused-vars
    const[{user}, dispatch] = useStateValue();
    return (
        <div className='header'>
            <div className="header__left">
                <img src={logo} alt='Facebook logo' />
            </div>
            <div className='header__input'>
                <SearchIcon/>
                <input placeholder="Search Facebook" type="text" />
            </div>

            <div className="header__center">
                <div className="header__option
                header__option--active">
                    <HomeIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <SubscriptionsOutlinedIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <StorefrontOutlinedIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large"/>
                </div>
            </div>
            <div className='header__right'>
                <div className="header__info">
                    <Avatar src = {user.photoURL} alt='Facebook Profile Avatar'/>
                    <h4>{user.displayName}</h4>    
                    <img src={TopHeaderMenuIcon} alt="" width={40} height={40} />
                    <img src={TopHeaderMessengerIcon} alt="" width={40} height={40} />
                    <img src={TopHeaderNotificationIcon} alt="" width={40} height={40} />
                    <img src={TopHeaderExpandMoreIcon} alt="" width={40} height={40} />
                </div>
            </div>

        </div>
    )
}

export default Header