import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
//import profileAvatar from './assets/profileAvatar.jpg'
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ExpandCircleDownRoundedIcon from "@mui/icons-material/ExpandCircleDownRounded";
import { useStateValue } from "../Context API/StateProvider.js";

function Sidebar() {
	// eslint-disable-next-line no-unused-vars
	const [{ user }, dispatch] = useStateValue();
	return (
		<div className='sidebar'>
			<SidebarRow src={user.photoURL} title={user.displayName} />
			<SidebarRow
				Icon={LocalHospitalIcon}
				title='Covid-19 Information Center'
			/>
			<SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
			<SidebarRow Icon={PeopleIcon} title='Friends' />
			<SidebarRow Icon={ChatIcon} title='Messenger' />
			<SidebarRow Icon={StorefrontIcon} title='MarketPlace' />
			<SidebarRow Icon={VideoLibraryIcon} title='Videos' />
			<SidebarRow Icon={ExpandCircleDownRoundedIcon} title='See More' />

			<div className='shortcuts-unit flex-col-hstart-vstart'>
				<div className='unit-header flex-col-hstart-vstart'>
					<div className='hairline' />
					<p className='txt-196'>Shortcuts</p>
				</div>
				<div className='shortcuts-list flex-col-hstart-vstart'>
					<div className='list-cell-1 flex-col-hstart-vcenter clip-contents'>
						<div className='list-cell flex-row-vcenter-hstart'>
							<img
								src='https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/252z8jef8lx-I0%3A8683%3B6680%3A47439?alt=media&token=abbe6c39-d7e2-45e8-8670-ef44e8a6e033'
								alt='Not Found'
								className='profile-photo'
							/>
							<div className='text-pairing flex-row-vstart-hstart'>
								<p className='txt-454'>Group Name</p>
							</div>
						</div>
					</div>
					<div className='list-cell-1 flex-col-hstart-vcenter clip-contents'>
						<div className='list-cell flex-row-vcenter-hstart'>
							<img
								src='https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/252z8jef8lx-I0%3A8684%3B6680%3A47439?alt=media&token=09cd6254-ccb0-4412-b3c4-3a8319fc910f'
								alt='Not Found'
								className='profile-photo'
							/>
							<div className='text-pairing flex-row-vstart-hstart'>
								<p className='txt-454'>Group Name</p>
							</div>
						</div>
					</div>
					<div className='list-cell-1 flex-col-hstart-vcenter clip-contents'>
						<div className='list-cell flex-row-vcenter-hstart'>
							<img
								src='https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/252z8jef8lx-I0%3A8685%3B6680%3A47439?alt=media&token=8ce49e4e-ae3f-4463-96f7-6d3310627df7'
								alt='Not Found'
								className='profile-photo'
							/>
							<div className='text-pairing flex-row-vstart-hstart'>
								<p className='txt-454'>Group Name</p>
							</div>
						</div>
					</div>
					<div className='list-cell-1 flex-col-hstart-vcenter clip-contents'>
						<div className='list-cell flex-row-vcenter-hstart'>
							<img
								src='https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/252z8jef8lx-I0%3A8686%3B6680%3A47439?alt=media&token=c69acba0-59cf-43ce-957a-c356d961a8bb'
								alt='Not Found'
								className='profile-photo'
							/>
							<div className='text-pairing flex-row-vstart-hstart'>
								<p className='txt-454'>Group Name</p>
							</div>
						</div>
					</div>
					<div className='list-cell-1 flex-col-hstart-vcenter clip-contents'>
						<div className='list-cell flex-row-vcenter-hstart'>
							<img
								src='https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/252z8jef8lx-I0%3A8687%3B6680%3A47439?alt=media&token=26c39cff-1281-4836-91ea-b905be4f833a'
								alt='Not Found'
								className='profile-photo'
							/>
							<div className='text-pairing flex-row-vstart-hstart'>
								<p className='txt-454'>Page Name</p>
							</div>
						</div>
					</div>
					<div className='list-cell-1 flex-col-hstart-vcenter clip-contents'>
						<div className='list-cell flex-row-vcenter-hstart'>
							<div className='_-36dp-small-secondary-icon-only flex-col-hstart-vstart'>
								<div className='icon-chevron-down'>
                                    <ExpandCircleDownRoundedIcon/>
                                </div>
							</div>
							<div className='text-pairing flex-row-vstart-hstart'>
								<p className='txt-454'>See more</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
