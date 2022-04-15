import React from "react";
import "./Sidebar.css"
import SidebarRow from "./SidebarRow";
//import profileAvatar from './assets/profileAvatar.jpg'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandCircleDownRoundedIcon from '@mui/icons-material/ExpandCircleDownRounded';
import {useStateValue} from "../Context API/StateProvider.js"

function Sidebar() {
    // eslint-disable-next-line no-unused-vars
    const[{user}, dispatch] = useStateValue();
	return ( 
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName}/>
            <SidebarRow Icon={LocalHospitalIcon} title="Covid-19 Information Center"/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
            <SidebarRow Icon={ChatIcon} title="Messenger"/>
            <SidebarRow Icon={StorefrontIcon} title="MarketPlace"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow Icon={ExpandCircleDownRoundedIcon} title="See More"/>
        </div>
    )
}

export default Sidebar;
